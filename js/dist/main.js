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
;/*! Magicheader - v0.1.0 - 2013-08-21
* https://github.com/lukechesser/MagicHeader.js
* Copyright (c) 2013 Luke Chesser; Licensed MIT */
(function($) {
  var cache, // store references 
    defaults, // plugin defaults
    properties, // extend defaults with options
    lastPosition, // previous scrollY position
    temporaryScrollUpPadding, // global store for scroll up padding
    temporaryScrollDownPadding; // global store for scroll down padding

  cache = {
    header: null
  };

  defaults = {
    headerIsVisible: true,
    headerHeight: 100, // in px
    scrollDownPadding: 30, // in px
    scrollUpPadding: 5 // in px
  };

  // function to test for touch
  var testforTouch = function () {
    if (('ontouchstart' in window) || window.DocumentTouch) {
      return true;
    } else {
      return false;
    }
  };

  // set initial header styles
  var initializeHeaderStyles = function () {
    cache.header.css({
      position: 'fixed',
      top: 0,
      transform: 'translateY(0)',
      WebkitTransition : 'all 0.3s ease-in-out',
      MozTransition    : 'all 0.3s ease-in-out',
      MsTransition     : 'all 0.3s ease-in-out',
      OTransition      : 'all 0.3s ease-in-out',
      transition       : 'all 0.3s ease-in-out'
    });
  };

  // set styles to show header
  var showHeader = function () {
    cache.header.css({
      transform: 'translateY(0)'
    });
    properties.headerIsVisible = true;
  };

  // set styles to hide header
  var hideHeader = function () {
    cache.header.css({
      transform: 'translateY(-' + properties.headerHeight + 'px)'
    });
    properties.headerIsVisible = false;
  };
  
  // set padding values; setup appropriate scroll event
  var initializeScroller = function (isTouchDevice) {
    temporaryScrollUpPadding = properties.scrollUpPadding;
    temporaryScrollDownPadding = properties.scrollDownPadding;
    lastPosition = window.scrollY;

    initializeHeaderStyles();

    if (isTouchDevice) {
      $(window).on({ 'touchmove': checkScrollPosition });
    } else {
      $(window).on({ 'scroll': checkScrollPosition });
    }
  };

  // check the scroll position vs the padding
  var checkScrollPosition = function () {
    if (properties.headerIsVisible && window.scrollY > lastPosition) {
      temporaryScrollDownPadding--;
      if (temporaryScrollDownPadding < 1) {
        hideHeader();
        temporaryScrollDownPadding = properties.scrollDownPadding;
      }
    } else if (!properties.headerIsVisible && window.scrollY < lastPosition) {
      temporaryScrollUpPadding--;
      if (temporaryScrollUpPadding < 1) {
        showHeader();
        temporaryScrollUpPadding = properties.scrollUpPadding;
      }
    }
    lastPosition = window.scrollY;
  };

  // extend jquery with magic header; setup properties from user options
  $.fn.magicHeader = function(options) {
    // override default options with passed-in options.
    properties = $.extend({}, defaults, options);

    cache.header = $(this);

    if (!options.headerHeight) {
      properties.headerHeight = $(this).height();
    }

    // test for touch; call appropriate function
    if (testforTouch()) {
      initializeScroller(true);
    } else {
      initializeScroller(false);
    }
    
    return this;
  };

}(jQuery));;(function($){
  
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