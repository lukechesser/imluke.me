(function($){
  
  var App, // namespace to house interactions
    c; // alias for cache
  
  App = {
    cache: {
      $homeLink: $('.js-home'),
      $wobbleLinks: $('.js-wobble'),
      $videos: $('.video'),
      $header: $('.js-fixed-header')
    },

    ready : function () {
      c = App.cache;

      this.initializeListeners();
      this.initializeResponsiveVideos();
      this.initializeMagicHeader();
    },

    initializeListeners : function () {
      c.$wobbleLinks.each(function(index){
        App.createAnimationOnHover.call(this, "wobble");
      });
    },

    initializeResponsiveVideos: function () {
      c.$videos.each(function () {
        $(this).fitVids();
      });
    },

    initializeMagicHeader: function () {
      c.$header.magicHeader({
        scrollDownPadding: 30,
        scrollUpPadding: 10
      });
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
    }
  };

  App.ready();
})(jQuery);