/*
 * AppScroll.js
 *
 * Copyright 2013, Jacob Kelley - http://jakiestfu.com/
 * Released under the MIT Licence
 * http://opensource.org/licenses/MIT
 *
 * Github:  https://github.com/jakiestfu/AppScroll
 * Version: 1.0.0
 */
/*jslint browser: true*/
/*global define, module, ender*/
(function(win) {
    'use strict';
    var AppScroll = function(elements){
        var cache = {
            toolbar: null, 
            scroller: null
        },
        touchable = function(fn){
            if(('ontouchstart' in window) && typeof fn === 'function') {
                fn.call();
            }
        },
        events = {
            listen: function(){
                if(cache.scroller){
                    cache.scroller.addEventListener('touchend', events._touchEnd);
                    cache.scroller.addEventListener('scroll', events._endScroll);
                }
                if(cache.toolbar){
                    cache.toolbar.addEventListener('touchmove', events._touchMove);
                }
                events._touchEnd();
                events._endScroll();
            },
            noListen: function(){
                if(cache.scroller){
                    cache.scroller.removeEventListener('touchend', events._touchEnd);
                    cache.scroller.removeEventListener('scroll', events._endScroll);
                }
                if(cache.toolbar){
                    cache.toolbar.removeEventListener('touchmove', events._touchMove);
                }
            },
            _touchMove: function(e){
                e.preventDefault();
            },
            _touchEnd: function(){
                cache.listenForScroll = true;
            },
            _endScroll: function(){
                if(cache.listenForScroll){
                    var height = parseInt(win.getComputedStyle(cache.scroller).height, 10);
                    if((cache.scroller.scrollTop+height) === height){
                        cache.scroller.scrollTop = 1;
                        cache.listenForScroll = false;
                    } else if(cache.scroller.scrollTop+height === cache.scroller.scrollHeight){
                        cache.scroller.scrollTop = cache.scroller.scrollTop-1;
                    }
                } else {
                    cache.listenForScroll = false;
                }
            }
        },
        init = function(elements){
            touchable(function(){
                cache = elements;
                events.listen();
            });
        };
        this.on = function(){
            touchable(function(){
                events.noListen();
                events.listen();
            });
        };
        this.off = function(){
            touchable(events.noListen);
        };
        init(elements);
    };
    if ((typeof module !== 'undefined') && module.exports) {
        module.exports = AppScroll;
    }
    if (typeof ender === 'undefined') {
        this.AppScroll = AppScroll;
    }
    if ((typeof define === "function") && define.amd) {
        define("AppScroll", [], function() {
            return AppScroll;
        });
    }
}).call(this, window);;(function($){
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