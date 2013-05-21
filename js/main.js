(function($){
  var App;
  
  App = {
    cache: {
      $snowflakeLink: $('.brand').parent(),
      $snowflakeText: $('.brand').next('h1'),
      $wobbleLinks: $('.js-wobble'),
      $videos: $('.video')
    },

    ready : function () {
      this.initializeListeners();
    },

    initializeListeners : function () {
      var c = App.cache;
      App.createAnimationOnHover.call(c.$snowflakeLink, "slideIn", c.$snowflakeText, true);
      c.$wobbleLinks.each(function(index){
        App.createAnimationOnHover.call(this, "wobble");
      });
      $(c.$videos).each(function () {
        $(this).fitVids();
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