# angular-fallback-src

[![Build status][travis-badge]][travis]

> Fallback image source directive

Add an `fb-src` attribute to an `<img>`. If the image's `ng-src` does not
exist, `fb-src` will be used instead.

Example:

```html
<img
  ng-src="broken.png"
  fb-src="http://upload.wikimedia.org/wikipedia/en/b/bc/Wiki.png" />
```

`fb-src` can of type array of strings, in which case, each element will be
used in turn until a request is successful.

[travis]: https://travis-ci.org/tlvince/angular-fallback-src
[travis-badge]: https://travis-ci.org/tlvince/angular-fallback-src.png?branch=master

## Install

```bash
bower install angular-fallback-src
```

## Usage

Add `fallback.src` as a module dependency, e.g.:

```js
angular.module('App', ['fallback.src']);
```

## Author

© 2014 Tom Vincent <http://tlvince.com/contact>

## License

Released under the [MIT License](http://tlvince.mit-license.org).
