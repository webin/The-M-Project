// Copyright (c) 2013 M-Way Solutions GmbH
// http://github.com/mwaylabs/The-M-Project/blob/absinthe/MIT-LICENSE.txt

/**
 *
 * @module M.Animation
 * @type {*}
 * @extends M.Object
 */
M.Animation = M.Object.design({

    /**
     * Indicating whether css animations are supported or not.
     *
     * @returns {boolean}
     */
    animationSupport: (function() {
        // CSS animations are supported by Android < 4 devices but only if a single property is changed.
        if( M.Environment.isLowerThanAndroid4 ) {
            return false;
        }
        if( M.Environment.isLowerThaniPhone4S ) {
            //return false;
        }
        // use M.Modernizr it is just a wrapper for Modernizr - doesn't throw an error in cases Modernizr is not defined
        return M.Modernizr.cssanimations;
    })(),

    /**
     * Indicating whether css transitions are supported or not.
     *
     * @returns {boolean}
     */
    transitionSupport: (function() {
        return M.Modernizr.csstransitions;
    })(),

    /**
     * Returns the prefixed css property for animationEnd.
     *
     * @returns {String}
     */
    animationEndEventName: (function() {
        var cssEvents = {
            'WebkitAnimation': 'webkitAnimationEnd',
            'OAnimation': 'oAnimationEnd',
            'msAnimation': 'MSAnimationEnd',
            'animation': 'animationend'
        };
        return cssEvents[ M.Modernizr.prefixed('animation') ];
    }()),

    /**
     * Returns the prefixed css property for transitionEnd.
     *
     * @returns {String}
     */
    transitionEndEventName: (function() {
        var cssEvents = {
            'WebkitTransition': 'webkitTransitionEnd',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        };
        return cssEvents[ M.Modernizr.prefixed('transition') ];
    }())
});