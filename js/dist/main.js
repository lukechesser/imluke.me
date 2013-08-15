/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    var div = document.createElement('div'),
        ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

    div.className = 'fit-vids-style';
    div.innerHTML = '&shy;<style>         \
      .fluid-width-video-wrapper {        \
         width: 100%;                     \
         position: relative;              \
         padding: 0;                      \
      }                                   \
                                          \
      .fluid-width-video-wrapper iframe,  \
      .fluid-width-video-wrapper object,  \
      .fluid-width-video-wrapper embed {  \
         position: absolute;              \
         top: 0;                          \
         left: 0;                         \
         width: 100%;                     \
         height: 100%;                    \
      }                                   \
    </style>';

    ref.parentNode.insertBefore(div,ref);

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']",
        "iframe[src*='kickstarter.com']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
})( jQuery );
;(function($){
  
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