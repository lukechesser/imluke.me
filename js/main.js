(function($){
  
  var App, // namespace to house interactions
    c, // alias for cache
    temporaryScrollUpPadding, // buffer for scrolling up
    temporaryScrollDownPadding; // buffer for scrolling down
  
  App = {
    cache: {
      $homeLink: $('.js-home'),
      $wobbleLinks: $('.js-wobble'),
      $videos: $('.video'),
      $header: $('.js-fixed-header')
    },

    properties: {
      headerIsVisible: true,
      scrollDownPadding: 30, // in px
      scrollUpPadding: 5, // in px
      lastPosition: window.scrollY
    },

    ready : function () {
      c = App.cache;

      this.initializeListeners();
      this.initializeResponsiveVideos();
    },

    initializeListeners : function () {
      c.$wobbleLinks.each(function(index){
        App.createAnimationOnHover.call(this, "wobble");
      });

      if (this.testforTouch()) {
        this.initializeScroller(true);
      } else {
        this.initializeScroller(false);
      }
    },

    initializeResponsiveVideos: function () {
      c.$videos.each(function () {
        $(this).fitVids();
      });
    },

    initializeScroller: function (isTouchDevice) {
      temporaryScrollUpPadding = App.properties.scrollUpPadding;
      temporaryScrollDownPadding = App.properties.scrollDownPadding;

      if (isTouchDevice) {
        $(window).on({ 'touchmove': App.checkScrollPosition });
      } else {
        $(window).on({ 'scroll': App.checkScrollPosition });
      }
    },

    checkScrollPosition: function () {
      if (App.properties.headerIsVisible && window.scrollY > App.properties.lastPosition) {
        temporaryScrollDownPadding--;
        if (temporaryScrollDownPadding < 1) {
          App.hideHeader();
          temporaryScrollDownPadding = App.properties.scrollDownPadding;
        }
      } else if (!App.properties.headerIsVisible && window.scrollY < App.properties.lastPosition) {
        temporaryScrollUpPadding--;
        if (temporaryScrollUpPadding < 1) {
          App.showHeader();
          temporaryScrollUpPadding = App.properties.scrollUpPadding;
        }
      }
      App.properties.lastPosition = window.scrollY;
    },

    showHeader: function () {
      c.$header.addClass('header-visible');
      App.properties.headerIsVisible = true;
    },

    hideHeader: function () {
      c.$header.removeClass('header-visible');
      App.properties.headerIsVisible = false;
    },

    createAnimationOnHover : function (animationClass, $objectToAnimate, objectIsHidden) {
      var $this = $(this);
      if (!$objectToAnimate) {
        $objectToAnimate = $this;
      }
      $objectToAnimate.addClass("animated");
      $this.on("mouseenter", function() {
        if (objectIsHidden) {
          $objectToAnimate.show();
        }
        $objectToAnimate.addClass(animationClass);
      });
      $this.on("mouseleave", function() {
        $objectToAnimate.removeClass(animationClass);
        if (objectIsHidden) {
          $objectToAnimate.fadeOut();
        }
      });
    },

    testforTouch: function () {
      if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        return true;
      } else {
        return false;
      }
    }
  };

  App.ready();
})(jQuery);