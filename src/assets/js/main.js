(function (window, undefined) {
  var c,
    cache,
    state,
    view,
    dispatch,
    defaults;

  c = cache = {};
  state = {};
  view = {};
  dispatch = {};
  defaults = {
    backgrounds: [
      '/img/nasa-1.jpg',
      '/img/nasa-2.jpg',
      '/img/nasa-3.jpg',
      '/img/nasa-4.jpg',
      '/img/nasa-5.jpg'
    ]
  };

  cache.init = function () {
    this.body = document.body;
  };

  state.init = function () {
    this.backgrounds = defaults.backgrounds;
  };

  state.getRandomBackground = function () {
    return this.backgrounds[Math.floor(Math.random() * this.backgrounds.length)];
  };

  view.init = function () {
    c.body.style.backgroundImage = 'url(' + state.getRandomBackground() + ')';
  };

  cache.init();
  state.init();
  view.init();

})(window);