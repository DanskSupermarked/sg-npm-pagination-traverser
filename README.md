# Salling Group Pagination Traverser
`Traverser` helps you paginate through Salling Group API resources
(e.g. the Stores API serves stores in pages).
It relies on a `Link` header in responses and will throw an error if none is present.
`Traverser` class is required like this:
```js
const Traverser = require('@salling-group/pagination-traverser');
```

The class is instantiated like this:
```js
const traverser = new Traverser(instance, '/v1/stores/', {
  'params': {
    'brand': 'netto',
  },
});
```

The parameters for the initialization is:

| Parameter | Required | Type | Description |
|-----------|----------|------|-------------|
|`instance`| Yes | Axios instance|An authenticated Axios instance (see NPM module @salling-group/auth). |
|`resource`| Yes | String | The resource to traverse. |
|`baseOptions`| No | Object |  Axios options to apply to the requests. |

The `Traverser` class has the following methods:

| Method | Description |
---------|-------------|
| `async get()` | Get the current page. |
| `async next()` | Move the traverser to the next page and get it. |
| `async previous()` | Move the traverser to the previous page and get it.|
| `async first()` | Move the traverser to the first page and get it. |
| `async last()` | Move the traverser to the last page and get it. |
| `async goto(page)` | Move the traverser to the given page and get it. |
| `pageNumber()` | Get the page that the traverser is on.

## Example: Paginate response from Stores API
```js
const Traverser = require('@salling-group/pagination-traverser');
const { createInstance } = require('@salling-group/auth');

const instance = createInstance({
  'auth': {
    'issuer': 'my_issuer',
    'secret': 'my_secret',
    'type': 'jwt',
  },
});
const traverser = new Traverser(instance, '/v1/stores/');

traverser.get().then((firstPage) => {
  console.log(firstPage);
  traverser.next().then((secondPage) => {
    console.log(secondPage);
  });
});
```
