const PAGE_REGEX = /(?:\?|&)page=(\d+)/;
const LINKS_REGEX = /<([^>]*)>;[^,]*rel="([^"]+)"/;

/**
 * Extract the page search parameter from a URL.
 *
 * @param {string} url The URL to search in.
 * @returns {string|null} The page number or null if it couldn't be found.
 */
function getPageFromURL(url) {
  const match = url.match(PAGE_REGEX);
  if (match) {
    return match[1];
  }
  return null;
}

/**
 * Deeply merge objects.
 *
 * @param obj1 The target object. This object will be modified.
 * @param obj2 The source object.
 * @returns {Object} The resulting objects.
 */
function deepMerge(obj1, obj2) {
  for (const property in obj2) {
    if (Object.prototype.hasOwnProperty.call(obj2, property)) {
      const {[property]: value} = obj2;
      if (Array.isArray(value)) {
        obj1[property] = obj1[property].concat(value);
      } else if (typeof value === 'object') {
        obj1[property] = deepMerge(obj1[property], value);
      } else {
        obj1[property] = value;
      }
    }
  }
  return obj1;
}

/**
 * Parse a Link header by turning it into an object that maps relation to URL.
 *
 * @param {string} linkHeader The value of the Link header.
 * @returns {Object} A mapping from relation to URL.
 */
function parseLinks(linkHeader) {
  const links = {};

  for (const link of linkHeader.split(',')) {
    const [, url, rel] = link.match(LINKS_REGEX);
    links[rel] = url;
  }
  return links;
}

module.exports = {
  deepMerge,
  getPageFromURL,
  parseLinks,
};
