# MagicHeader.js

Make fixed headers smarter on scroll. Inspired by Teehan+Lax, Readability, and MailChimp. [See an example here](http://lukechesser.github.io/MagicHeader.js/example/index.html).

![MagicHeader - Make your fixed headers smarter on scroll](https://raw.github.com/lukechesser/MagicHeader.js/master/example/example.gif)

## Basic Usage
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/lukechesser/MagicHeader.js/master/dist/MagicHeader.min.js
[max]: https://raw.github.com/lukechesser/MagicHeader.js/master/dist/MagicHeader.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/MagicHeader.min.js"></script>
<script>
jQuery(function($) {
  $('.header').magicHeader();
});
</script>
```

## Documentation
Make sure to include [jQuery](https://github.com/jquery/jquery) in your page before including `MagicHeader.min.js`. Calling MagicHeader is easy:

```js
$('.header').magicHeader({
	headerIsVisible: true,
    scrollDownPadding: 30,
    scrollUpPadding: 5
});
```

- **headerIsVisible** (boolean): At initialization, is your header hidden? If you initialize your page with your header hidden, set `headerIsVisible` to `false`.
- **scrollDownPadding** (pixels): How far the user has to scroll *down* before the header disappears (in pixels). After the header is hidden, the scrollDownPadding is reset. Defaults to `30px`.
- **scrollUpPadding** (pixels): How far the user has to scroll *up* before the header reappears (in pixels). After the header is shown, the scrollUpPadding is reset. Defaults to `5px`.
- **headerHeight** (pixels): magicHeader automatically detects the height of the header, but if you have a header with a large drop shadow or border, override the height here to make the header (and shadow/border) disappear completely. Defaults to `100px`.

## Examples
See a [basic example here](http://lukechesser.github.io/MagicHeader.js/example/index.html). More examples coming soon.

## Contributing
I'd love your help, so any contributions are welcome. If you do submit a pull-request, please follow the etiquette listed below:

- Please check to make sure that there aren't existing pull requests attempting to address the issue mentioned. We also recommend checking for issues related to the issue on the tracker, as another contributer may be working on the issue in a branch or fork.
- Non-trivial changes should be discussed in an issue first
- Develop in a topic branch, not `master`
- Squash your commits
- Write a convincing description of your changes to increase your chances of acceptance

To get your local environment up and running, run `npm install` and use `grunt default` to compile and minify assets.

## Issues
Before submitting an issue:

- Make sure you're looking at the latest version
- Use the search feature to ensure that the issue hasn't been reported before

Please include as much information about the issue as possible.

## Contributors
- Luke Chesser ([Dribbble](http://dribbble.com/lukechesser), [Twitter](https://twitter.com/lukechesser), [GitHub](https://github.com/lukechesser), [Blog](http://imluke.me/))