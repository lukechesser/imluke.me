/*! Magicheader - v0.1.0 - 2013-08-21
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

}(jQuery));