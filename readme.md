# angular-fallback-src


Fallback image source directive.

Add an `fb-src` attribute to an `<img>`. If the image's `ng-src` does not
exist, `fb-src` will be used instead.

Example:

```html
<img
  ng-src="broken.png"
  fb-src="http://upload.wikimedia.org/wikipedia/en/b/bc/Wiki.png" />
```

## Author

© 2013 Tom Vincent <http://tlvince.com/contact>

## License

Released under the [MIT License](http://tlvince.mit-license.org).
