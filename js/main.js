jQuery(function($){
  var imluke;
  
  imluke = {
    cache: {
      $snowflakeLink: $('.brand').parent(),
      $snowflakeText: $('.brand').next('h1'),
      $wobbleLinks: $('.js-wobble')
    },

    ready: function() {
      this.initializeListeners();
    },

    initializeListeners: function() {
      var c = imluke.cache;
      imluke.createAnimationOnHover.call(c.$snowflakeLink, "slideIn", c.$snowflakeText, true);
      c.$wobbleLinks.each(function(index){
        imluke.createAnimationOnHover.call(this, "wobble");
      });
    },

    createAnimationOnHover: function(animationClass, $objectToAnimate, objectIsHidden) {
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
  }
  imluke.ready();
});