(function($){
  var App;
  
  App = {
    cache: {
      $snowflakeLink: $('.brand').parent(),
      $snowflakeText: $('.brand').next('h1'),
      $wobbleLinks: $('.js-wobble'),
      $toolbar: $('.bar'),
      $content: $('#content'),
      scroller: null
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
      App.createScroller(c.$toolbar, c.$content);
      App.startScroller();
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

    createScroller : function (toolbarElement, contentElement) {
      App.cache.scroller = new AppScroll({
        toolbar: toolbarElement,
        scroller: contentElement
      });
    },

    startScroller : function () {
      App.cache.scroller.on();
    },

    stopScroller : function () {
      App.cache.scroller.off();
    }
  };
  App.ready();
})(jQuery);