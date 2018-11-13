const { parseLinks, getPageFromURL, deepMerge } = require('./util');

/**
 * Helps traverse through paginated resources.
 */
class Traverser {
  /**
   * Construct a new traverser.
   *
   * @param instance An authenticated Axios instance (see NPM module @salling-group/auth).
   * @param {string} resource The resource to traverse.
   * @param {Object} baseOptions Axios options to apply to the request.
   * A mapper to modify the entries in the pages.
   */
  constructor(instance, resource, baseOptions = {}) {
    this.instance = instance;
    this.resource = resource;
    this.baseOptions = baseOptions;
    this.lastPage = null;
    this.currentPage = 1;
  }

  /**
   * Get the current page.
   *
   * @returns {Promise<Array>} An array containing the current page.
   * @throws {Error} If the resource cannot be paginated.
   */
  async get() {
    const result = await this.instance.get(this.resource, deepMerge({ 'params': { 'page': this.currentPage } }, this.baseOptions));
    if (!this.lastPage) {
      if (!result.headers.link) {
        throw new Error(`The resource ${this.resource} cannot be paginated.`);
      }
      const links = parseLinks(result.headers.link);
      this.lastPage = getPageFromURL(links.last);
    }
    return result.data;
  }

  /**
   * Move the traverser forward and get the page. Returns null if there is no next page.
   *
   * @returns {Promise<Array|null>} An array containing the page or null if there is no next page.
   */
  async next() {
    if (this.lastPage && this.currentPage >= this.lastPage) {
      return null;
    }
    ++this.currentPage;
    return this.get();
  }

  /**
   * Move the traverser backward and get the page. Returns null if there is no previous page.
   *
   * @returns {Promise<Array|null>}
   * An array containing the page or null if there is no previous page.
   */
  async previous() {
    if (this.currentPage <= 1) {
      return null;
    }
    --this.currentPage;
    return this.get();
  }

  /**
   * Move the traverser to the first page and get the page.
   *
   * @returns {Promise<Array>} An array containing the page.
   */
  async first() {
    this.currentPage = 1;
    return this.get();
  }

  /**
   * Move the traverser to the last page and get the page.
   * Note: You must make another request before this so the traverser can fetch the last page index.
   *
   * @returns {Promise<Array>} An array containing the page.
   * @throws {Error} If the first request is the last page.
   */
  async last() {
    if (!this.lastPage) {
      throw new Error('You must perform one lookup before going to the last page.');
    }
    this.currentPage = this.lastPage;
    return this.get();
  }

  /**
   * Move to a specific page and get it.
   *
   * @param {int} page The page to move to and get.
   * @returns {Promise<Array>} An array containing the page.
   */
  async goto(page) {
    if (page < 1) {
      throw new Error(`Page must be above or equal to 1. (Got ${page})`);
    }
    if (this.lastPage && page > this.lastPage) {
      throw new Error(`Page must be below last page (${this.lastPage}). (Got ${page})`);
    }
    this.currentPage = page;
    return this.get();
  }

  /**
   * Get the current page number of the traverse.
   *
   * @returns {number} The current page number.
   */
  pageNumber() {
    return this.currentPage;
  }
}

module.exports = Traverser;
