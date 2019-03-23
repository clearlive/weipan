(function (global) {
  var babelHelpers = global.babelHelpers = {};

  babelHelpers.interopRequireDefault = function (obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  };

  babelHelpers.interopRequireWildcard = function (obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  };
})(typeof global === "undefined" ? self : global);(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * MUI Angular main module
 * @module angular/main
 */

(function (win) {
  // return if library has been loaded already
  if (win._muiAngularLoaded) return;else win._muiAngularLoaded = true;

  win.angular.module('mui', [require('src/angular/appbar'), require('src/angular/button'), require('src/angular/caret'), require('src/angular/container'), require('src/angular/divider'), require('src/angular/dropdown'), require('src/angular/dropdown-item'), require('src/angular/panel'), require('src/angular/input'), require('src/angular/row'), require('src/angular/col'), require('src/angular/tabs'), require('src/angular/radio'), require('src/angular/checkbox'), require('src/angular/select'), require('src/angular/form')]);
})(window);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfY2MzYjc0N2IuanMiXSwibmFtZXMiOlsid2luIiwiX211aUFuZ3VsYXJMb2FkZWQiLCJhbmd1bGFyIiwibW9kdWxlIiwicmVxdWlyZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7QUFLQSxDQUFDLFVBQVNBLEdBQVQsRUFBYztBQUNiO0FBQ0EsTUFBSUEsSUFBSUMsaUJBQVIsRUFBMkIsT0FBM0IsS0FDS0QsSUFBSUMsaUJBQUosR0FBd0IsSUFBeEI7O0FBRUxELE1BQUlFLE9BQUosQ0FBWUMsTUFBWixDQUFtQixLQUFuQixFQUEwQixDQUN4QkMsUUFBUSxvQkFBUixDQUR3QixFQUV4QkEsUUFBUSxvQkFBUixDQUZ3QixFQUd4QkEsUUFBUSxtQkFBUixDQUh3QixFQUl4QkEsUUFBUSx1QkFBUixDQUp3QixFQUt4QkEsUUFBUSxxQkFBUixDQUx3QixFQU14QkEsUUFBUSxzQkFBUixDQU53QixFQU94QkEsUUFBUSwyQkFBUixDQVB3QixFQVF4QkEsUUFBUSxtQkFBUixDQVJ3QixFQVN4QkEsUUFBUSxtQkFBUixDQVR3QixFQVV4QkEsUUFBUSxpQkFBUixDQVZ3QixFQVd4QkEsUUFBUSxpQkFBUixDQVh3QixFQVl4QkEsUUFBUSxrQkFBUixDQVp3QixFQWF4QkEsUUFBUSxtQkFBUixDQWJ3QixFQWN4QkEsUUFBUSxzQkFBUixDQWR3QixFQWV4QkEsUUFBUSxvQkFBUixDQWZ3QixFQWdCeEJBLFFBQVEsa0JBQVIsQ0FoQndCLENBQTFCO0FBa0JELENBdkJELEVBdUJHQyxNQXZCSCIsImZpbGUiOiJmYWtlX2NjM2I3NDdiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNVUkgQW5ndWxhciBtYWluIG1vZHVsZVxuICogQG1vZHVsZSBhbmd1bGFyL21haW5cbiAqL1xuXG4oZnVuY3Rpb24od2luKSB7XG4gIC8vIHJldHVybiBpZiBsaWJyYXJ5IGhhcyBiZWVuIGxvYWRlZCBhbHJlYWR5XG4gIGlmICh3aW4uX211aUFuZ3VsYXJMb2FkZWQpIHJldHVybjtcbiAgZWxzZSB3aW4uX211aUFuZ3VsYXJMb2FkZWQgPSB0cnVlO1xuXG4gIHdpbi5hbmd1bGFyLm1vZHVsZSgnbXVpJywgW1xuICAgIHJlcXVpcmUoJ3NyYy9hbmd1bGFyL2FwcGJhcicpLFxuICAgIHJlcXVpcmUoJ3NyYy9hbmd1bGFyL2J1dHRvbicpLFxuICAgIHJlcXVpcmUoJ3NyYy9hbmd1bGFyL2NhcmV0JyksXG4gICAgcmVxdWlyZSgnc3JjL2FuZ3VsYXIvY29udGFpbmVyJyksXG4gICAgcmVxdWlyZSgnc3JjL2FuZ3VsYXIvZGl2aWRlcicpLFxuICAgIHJlcXVpcmUoJ3NyYy9hbmd1bGFyL2Ryb3Bkb3duJyksXG4gICAgcmVxdWlyZSgnc3JjL2FuZ3VsYXIvZHJvcGRvd24taXRlbScpLFxuICAgIHJlcXVpcmUoJ3NyYy9hbmd1bGFyL3BhbmVsJyksXG4gICAgcmVxdWlyZSgnc3JjL2FuZ3VsYXIvaW5wdXQnKSxcbiAgICByZXF1aXJlKCdzcmMvYW5ndWxhci9yb3cnKSxcbiAgICByZXF1aXJlKCdzcmMvYW5ndWxhci9jb2wnKSxcbiAgICByZXF1aXJlKCdzcmMvYW5ndWxhci90YWJzJyksXG4gICAgcmVxdWlyZSgnc3JjL2FuZ3VsYXIvcmFkaW8nKSxcbiAgICByZXF1aXJlKCdzcmMvYW5ndWxhci9jaGVja2JveCcpLFxuICAgIHJlcXVpcmUoJ3NyYy9hbmd1bGFyL3NlbGVjdCcpLFxuICAgIHJlcXVpcmUoJ3NyYy9hbmd1bGFyL2Zvcm0nKVxuICBdKTtcbn0pKHdpbmRvdyk7XG4iXX0=
},{"src/angular/appbar":6,"src/angular/button":7,"src/angular/caret":8,"src/angular/checkbox":9,"src/angular/col":10,"src/angular/container":11,"src/angular/divider":12,"src/angular/dropdown":14,"src/angular/dropdown-item":13,"src/angular/form":15,"src/angular/input":16,"src/angular/panel":17,"src/angular/radio":18,"src/angular/row":19,"src/angular/select":20,"src/angular/tabs":21}],2:[function(require,module,exports){
"use strict";

/**
 * MUI config module
 * @module config
 */

/** Define module API */
module.exports = {
  /** Use debug mode */
  debug: true
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7O0FBS0E7QUFDQUEsT0FBT0MsT0FBUCxHQUFpQjtBQUNmO0FBQ0FDLFNBQU87QUFGUSxDQUFqQiIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1VSSBjb25maWcgbW9kdWxlXG4gKiBAbW9kdWxlIGNvbmZpZ1xuICovXG5cbi8qKiBEZWZpbmUgbW9kdWxlIEFQSSAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8qKiBVc2UgZGVidWcgbW9kZSAqL1xuICBkZWJ1ZzogdHJ1ZVxufTtcbiJdfQ==
},{}],3:[function(require,module,exports){
/**
 * MUI CSS/JS form helpers module
 * @module lib/forms.py
 */

'use strict';

var jqLite = require('./jqLite');

/**
 * Menu position/size/scroll helper
 * @returns {Object} Object with keys 'height', 'top', 'scrollTop'
 */
function getMenuPositionalCSSFn(wrapperEl, menuEl, selectedRow) {
  var viewHeight = document.documentElement.clientHeight,
      numRows = menuEl.children.length;

  // determine menu height
  var h = parseInt(menuEl.offsetHeight),
      height = Math.min(h, viewHeight);

  // determine row height
  var p = parseInt(jqLite.css(menuEl, 'padding-top')),
      rowHeight = (h - 2 * p) / numRows;

  // determine 'top'
  var top, initTop, minTop, maxTop;

  initTop = -1 * selectedRow * rowHeight;
  minTop = -1 * wrapperEl.getBoundingClientRect().top;
  maxTop = viewHeight - height + minTop;

  top = Math.min(Math.max(initTop, minTop), maxTop);

  // determine 'scrollTop'
  var scrollTop = 0,
      scrollIdeal,
      scrollMax;

  if (h > viewHeight) {
    scrollIdeal = top + p + selectedRow * rowHeight;
    scrollMax = numRows * rowHeight + 2 * p - height;
    scrollTop = Math.min(scrollIdeal, scrollMax);
  }

  return {
    'height': height + 'px',
    'top': top + 'px',
    'scrollTop': scrollTop
  };
}

/** Define module API */
module.exports = {
  getMenuPositionalCSS: getMenuPositionalCSSFn
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zLmpzIl0sIm5hbWVzIjpbImpxTGl0ZSIsInJlcXVpcmUiLCJnZXRNZW51UG9zaXRpb25hbENTU0ZuIiwid3JhcHBlckVsIiwibWVudUVsIiwic2VsZWN0ZWRSb3ciLCJ2aWV3SGVpZ2h0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJudW1Sb3dzIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJoIiwicGFyc2VJbnQiLCJvZmZzZXRIZWlnaHQiLCJoZWlnaHQiLCJNYXRoIiwibWluIiwicCIsImNzcyIsInJvd0hlaWdodCIsInRvcCIsImluaXRUb3AiLCJtaW5Ub3AiLCJtYXhUb3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJtYXgiLCJzY3JvbGxUb3AiLCJzY3JvbGxJZGVhbCIsInNjcm9sbE1heCIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRNZW51UG9zaXRpb25hbENTUyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7O0FBRUEsSUFBSUEsU0FBU0MsUUFBUSxVQUFSLENBQWI7O0FBR0E7Ozs7QUFJQSxTQUFTQyxzQkFBVCxDQUFnQ0MsU0FBaEMsRUFBMkNDLE1BQTNDLEVBQW1EQyxXQUFuRCxFQUFnRTtBQUM5RCxNQUFJQyxhQUFhQyxTQUFTQyxlQUFULENBQXlCQyxZQUExQztBQUFBLE1BQ0lDLFVBQVVOLE9BQU9PLFFBQVAsQ0FBZ0JDLE1BRDlCOztBQUdBO0FBQ0EsTUFBSUMsSUFBSUMsU0FBU1YsT0FBT1csWUFBaEIsQ0FBUjtBQUFBLE1BQ0lDLFNBQVNDLEtBQUtDLEdBQUwsQ0FBU0wsQ0FBVCxFQUFZUCxVQUFaLENBRGI7O0FBR0E7QUFDQSxNQUFJYSxJQUFJTCxTQUFTZCxPQUFPb0IsR0FBUCxDQUFXaEIsTUFBWCxFQUFtQixhQUFuQixDQUFULENBQVI7QUFBQSxNQUNJaUIsWUFBWSxDQUFDUixJQUFJLElBQUlNLENBQVQsSUFBY1QsT0FEOUI7O0FBR0E7QUFDQSxNQUFJWSxHQUFKLEVBQVNDLE9BQVQsRUFBa0JDLE1BQWxCLEVBQTBCQyxNQUExQjs7QUFFQUYsWUFBVSxDQUFDLENBQUQsR0FBS2xCLFdBQUwsR0FBbUJnQixTQUE3QjtBQUNBRyxXQUFTLENBQUMsQ0FBRCxHQUFLckIsVUFBVXVCLHFCQUFWLEdBQWtDSixHQUFoRDtBQUNBRyxXQUFVbkIsYUFBYVUsTUFBZCxHQUF3QlEsTUFBakM7O0FBRUFGLFFBQU1MLEtBQUtDLEdBQUwsQ0FBU0QsS0FBS1UsR0FBTCxDQUFTSixPQUFULEVBQWtCQyxNQUFsQixDQUFULEVBQW9DQyxNQUFwQyxDQUFOOztBQUVBO0FBQ0EsTUFBSUcsWUFBWSxDQUFoQjtBQUFBLE1BQ0lDLFdBREo7QUFBQSxNQUVJQyxTQUZKOztBQUlBLE1BQUlqQixJQUFJUCxVQUFSLEVBQW9CO0FBQ2xCdUIsa0JBQWNQLE1BQU1ILENBQU4sR0FBVWQsY0FBY2dCLFNBQXRDO0FBQ0FTLGdCQUFZcEIsVUFBVVcsU0FBVixHQUFzQixJQUFJRixDQUExQixHQUE4QkgsTUFBMUM7QUFDQVksZ0JBQVlYLEtBQUtDLEdBQUwsQ0FBU1csV0FBVCxFQUFzQkMsU0FBdEIsQ0FBWjtBQUNEOztBQUVELFNBQU87QUFDTCxjQUFVZCxTQUFTLElBRGQ7QUFFTCxXQUFPTSxNQUFNLElBRlI7QUFHTCxpQkFBYU07QUFIUixHQUFQO0FBS0Q7O0FBR0Q7QUFDQUcsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyx3QkFBc0IvQjtBQURQLENBQWpCIiwiZmlsZSI6ImZvcm1zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNVUkgQ1NTL0pTIGZvcm0gaGVscGVycyBtb2R1bGVcbiAqIEBtb2R1bGUgbGliL2Zvcm1zLnB5XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIganFMaXRlID0gcmVxdWlyZSgnLi9qcUxpdGUnKTtcblxuXG4vKipcbiAqIE1lbnUgcG9zaXRpb24vc2l6ZS9zY3JvbGwgaGVscGVyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBPYmplY3Qgd2l0aCBrZXlzICdoZWlnaHQnLCAndG9wJywgJ3Njcm9sbFRvcCdcbiAqL1xuZnVuY3Rpb24gZ2V0TWVudVBvc2l0aW9uYWxDU1NGbih3cmFwcGVyRWwsIG1lbnVFbCwgc2VsZWN0ZWRSb3cpIHtcbiAgdmFyIHZpZXdIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgbnVtUm93cyA9IG1lbnVFbC5jaGlsZHJlbi5sZW5ndGg7XG5cbiAgLy8gZGV0ZXJtaW5lIG1lbnUgaGVpZ2h0XG4gIHZhciBoID0gcGFyc2VJbnQobWVudUVsLm9mZnNldEhlaWdodCksXG4gICAgICBoZWlnaHQgPSBNYXRoLm1pbihoLCB2aWV3SGVpZ2h0KTtcblxuICAvLyBkZXRlcm1pbmUgcm93IGhlaWdodFxuICB2YXIgcCA9IHBhcnNlSW50KGpxTGl0ZS5jc3MobWVudUVsLCAncGFkZGluZy10b3AnKSksXG4gICAgICByb3dIZWlnaHQgPSAoaCAtIDIgKiBwKSAvIG51bVJvd3M7XG5cbiAgLy8gZGV0ZXJtaW5lICd0b3AnXG4gIHZhciB0b3AsIGluaXRUb3AsIG1pblRvcCwgbWF4VG9wO1xuXG4gIGluaXRUb3AgPSAtMSAqIHNlbGVjdGVkUm93ICogcm93SGVpZ2h0O1xuICBtaW5Ub3AgPSAtMSAqIHdyYXBwZXJFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gIG1heFRvcCA9ICh2aWV3SGVpZ2h0IC0gaGVpZ2h0KSArIG1pblRvcDtcblxuICB0b3AgPSBNYXRoLm1pbihNYXRoLm1heChpbml0VG9wLCBtaW5Ub3ApLCBtYXhUb3ApO1xuXG4gIC8vIGRldGVybWluZSAnc2Nyb2xsVG9wJ1xuICB2YXIgc2Nyb2xsVG9wID0gMCxcbiAgICAgIHNjcm9sbElkZWFsLFxuICAgICAgc2Nyb2xsTWF4O1xuXG4gIGlmIChoID4gdmlld0hlaWdodCkge1xuICAgIHNjcm9sbElkZWFsID0gdG9wICsgcCArIHNlbGVjdGVkUm93ICogcm93SGVpZ2h0O1xuICAgIHNjcm9sbE1heCA9IG51bVJvd3MgKiByb3dIZWlnaHQgKyAyICogcCAtIGhlaWdodDtcbiAgICBzY3JvbGxUb3AgPSBNYXRoLm1pbihzY3JvbGxJZGVhbCwgc2Nyb2xsTWF4KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgJ2hlaWdodCc6IGhlaWdodCArICdweCcsXG4gICAgJ3RvcCc6IHRvcCArICdweCcsXG4gICAgJ3Njcm9sbFRvcCc6IHNjcm9sbFRvcFxuICB9O1xufVxuXG5cbi8qKiBEZWZpbmUgbW9kdWxlIEFQSSAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldE1lbnVQb3NpdGlvbmFsQ1NTOiBnZXRNZW51UG9zaXRpb25hbENTU0ZuXG59O1xuIl19
},{"./jqLite":4}],4:[function(require,module,exports){
/**
 * MUI CSS/JS jqLite module
 * @module lib/jqLite
 */

'use strict';

/**
 * Add a class to an element.
 * @param {Element} element - The DOM element.
 * @param {string} cssClasses - Space separated list of class names.
 */

function jqLiteAddClass(element, cssClasses) {
  if (!cssClasses || !element.setAttribute) return;

  var existingClasses = _getExistingClasses(element),
      splitClasses = cssClasses.split(' '),
      cssClass;

  for (var i = 0; i < splitClasses.length; i++) {
    cssClass = splitClasses[i].trim();
    if (existingClasses.indexOf(' ' + cssClass + ' ') === -1) {
      existingClasses += cssClass + ' ';
    }
  }

  element.setAttribute('class', existingClasses.trim());
}

/**
 * Get or set CSS properties.
 * @param {Element} element - The DOM element.
 * @param {string} [name] - The property name.
 * @param {string} [value] - The property value.
 */
function jqLiteCss(element, name, value) {
  // Return full style object
  if (name === undefined) {
    return getComputedStyle(element);
  }

  var nameType = jqLiteType(name);

  // Set multiple values
  if (nameType === 'object') {
    for (var key in name) {
      element.style[_camelCase(key)] = name[key];
    }return;
  }

  // Set a single value
  if (nameType === 'string' && value !== undefined) {
    element.style[_camelCase(name)] = value;
  }

  var styleObj = getComputedStyle(element),
      isArray = jqLiteType(name) === 'array';

  // Read single value
  if (!isArray) return _getCurrCssProp(element, name, styleObj);

  // Read multiple values
  var outObj = {},
      key;

  for (var i = 0; i < name.length; i++) {
    key = name[i];
    outObj[key] = _getCurrCssProp(element, key, styleObj);
  }

  return outObj;
}

/**
 * Check if element has class.
 * @param {Element} element - The DOM element.
 * @param {string} cls - The class name string.
 */
function jqLiteHasClass(element, cls) {
  if (!cls || !element.getAttribute) return false;
  return _getExistingClasses(element).indexOf(' ' + cls + ' ') > -1;
}

/**
 * Return the type of a variable.
 * @param {} somevar - The JavaScript variable.
 */
function jqLiteType(somevar) {
  // handle undefined
  if (somevar === undefined) return 'undefined';

  // handle others (of type [object <Type>])
  var typeStr = Object.prototype.toString.call(somevar);
  if (typeStr.indexOf('[object ') === 0) {
    return typeStr.slice(8, -1).toLowerCase();
  } else {
    throw new Error("MUI: Could not understand type: " + typeStr);
  }
}

/**
 * Attach an event handler to a DOM element
 * @param {Element} element - The DOM element.
 * @param {string} events - Space separated event names.
 * @param {Function} callback - The callback function.
 * @param {Boolean} useCapture - Use capture flag.
 */
function jqLiteOn(element, events, callback, useCapture) {
  useCapture = useCapture === undefined ? false : useCapture;

  var cache = element._muiEventCache = element._muiEventCache || {};

  events.split(' ').map(function (event) {
    // add to DOM
    element.addEventListener(event, callback, useCapture);

    // add to cache
    cache[event] = cache[event] || [];
    cache[event].push([callback, useCapture]);
  });
}

/**
 * Remove an event handler from a DOM element
 * @param {Element} element - The DOM element.
 * @param {string} events - Space separated event names.
 * @param {Function} callback - The callback function.
 * @param {Boolean} useCapture - Use capture flag.
 */
function jqLiteOff(element, events, callback, useCapture) {
  useCapture = useCapture === undefined ? false : useCapture;

  // remove from cache
  var cache = element._muiEventCache = element._muiEventCache || {},
      argsList,
      args,
      i;

  events.split(' ').map(function (event) {
    argsList = cache[event] || [];

    i = argsList.length;
    while (i--) {
      args = argsList[i];

      // remove all events if callback is undefined
      if (callback === undefined || args[0] === callback && args[1] === useCapture) {

        // remove from cache
        argsList.splice(i, 1);

        // remove from DOM
        element.removeEventListener(event, args[0], args[1]);
      }
    }
  });
}

/**
 * Attach an event hander which will only execute once per element per event
 * @param {Element} element - The DOM element.
 * @param {string} events - Space separated event names.
 * @param {Function} callback - The callback function.
 * @param {Boolean} useCapture - Use capture flag.
 */
function jqLiteOne(element, events, callback, useCapture) {
  events.split(' ').map(function (event) {
    jqLiteOn(element, event, function onFn(ev) {
      // execute callback
      if (callback) callback.apply(this, arguments);

      // remove wrapper
      jqLiteOff(element, event, onFn, useCapture);
    }, useCapture);
  });
}

/**
 * Get or set horizontal scroll position
 * @param {Element} element - The DOM element
 * @param {number} [value] - The scroll position
 */
function jqLiteScrollLeft(element, value) {
  var win = window;

  // get
  if (value === undefined) {
    if (element === win) {
      var docEl = document.documentElement;
      return (win.pageXOffset || docEl.scrollLeft) - (docEl.clientLeft || 0);
    } else {
      return element.scrollLeft;
    }
  }

  // set
  if (element === win) win.scrollTo(value, jqLiteScrollTop(win));else element.scrollLeft = value;
}

/**
 * Get or set vertical scroll position
 * @param {Element} element - The DOM element
 * @param {number} value - The scroll position
 */
function jqLiteScrollTop(element, value) {
  var win = window;

  // get
  if (value === undefined) {
    if (element === win) {
      var docEl = document.documentElement;
      return (win.pageYOffset || docEl.scrollTop) - (docEl.clientTop || 0);
    } else {
      return element.scrollTop;
    }
  }

  // set
  if (element === win) win.scrollTo(jqLiteScrollLeft(win), value);else element.scrollTop = value;
}

/**
 * Return object representing top/left offset and element height/width.
 * @param {Element} element - The DOM element.
 */
function jqLiteOffset(element) {
  var win = window,
      rect = element.getBoundingClientRect(),
      scrollTop = jqLiteScrollTop(win),
      scrollLeft = jqLiteScrollLeft(win);

  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
    height: rect.height,
    width: rect.width
  };
}

/**
 * Attach a callback to the DOM ready event listener
 * @param {Function} fn - The callback function.
 */
function jqLiteReady(fn) {
  var done = false,
      top = true,
      doc = document,
      win = doc.defaultView,
      root = doc.documentElement,
      add = doc.addEventListener ? 'addEventListener' : 'attachEvent',
      rem = doc.addEventListener ? 'removeEventListener' : 'detachEvent',
      pre = doc.addEventListener ? '' : 'on';

  var init = function init(e) {
    if (e.type == 'readystatechange' && doc.readyState != 'complete') {
      return;
    }

    (e.type == 'load' ? win : doc)[rem](pre + e.type, init, false);
    if (!done && (done = true)) fn.call(win, e.type || e);
  };

  var poll = function poll() {
    try {
      root.doScroll('left');
    } catch (e) {
      setTimeout(poll, 50);return;
    }
    init('poll');
  };

  if (doc.readyState == 'complete') {
    fn.call(win, 'lazy');
  } else {
    if (doc.createEventObject && root.doScroll) {
      try {
        top = !win.frameElement;
      } catch (e) {}
      if (top) poll();
    }
    doc[add](pre + 'DOMContentLoaded', init, false);
    doc[add](pre + 'readystatechange', init, false);
    win[add](pre + 'load', init, false);
  }
}

/**
 * Remove classes from a DOM element
 * @param {Element} element - The DOM element.
 * @param {string} cssClasses - Space separated list of class names.
 */
function jqLiteRemoveClass(element, cssClasses) {
  if (!cssClasses || !element.setAttribute) return;

  var existingClasses = _getExistingClasses(element),
      splitClasses = cssClasses.split(' '),
      cssClass;

  for (var i = 0; i < splitClasses.length; i++) {
    cssClass = splitClasses[i].trim();
    while (existingClasses.indexOf(' ' + cssClass + ' ') >= 0) {
      existingClasses = existingClasses.replace(' ' + cssClass + ' ', ' ');
    }
  }

  element.setAttribute('class', existingClasses.trim());
}

// ------------------------------
// Utilities
// ------------------------------
var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g,
    MOZ_HACK_REGEXP = /^moz([A-Z])/,
    ESCAPE_REGEXP = /([.*+?^=!:${}()|\[\]\/\\])/g;

function _getExistingClasses(element) {
  var classes = (element.getAttribute('class') || '').replace(/[\n\t]/g, '');
  return ' ' + classes + ' ';
}

function _camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
}

function _escapeRegExp(string) {
  return string.replace(ESCAPE_REGEXP, "\\$1");
}

function _getCurrCssProp(elem, name, computed) {
  var ret;

  // try computed style
  ret = computed.getPropertyValue(name);

  // try style attribute (if element is not attached to document)
  if (ret === '' && !elem.ownerDocument) ret = elem.style[_camelCase(name)];

  return ret;
}

/**
 * Module API
 */
module.exports = {
  /** Add classes */
  addClass: jqLiteAddClass,

  /** Get or set CSS properties */
  css: jqLiteCss,

  /** Check for class */
  hasClass: jqLiteHasClass,

  /** Remove event handlers */
  off: jqLiteOff,

  /** Return offset values */
  offset: jqLiteOffset,

  /** Add event handlers */
  on: jqLiteOn,

  /** Add an execute-once event handler */
  one: jqLiteOne,

  /** DOM ready event handler */
  ready: jqLiteReady,

  /** Remove classes */
  removeClass: jqLiteRemoveClass,

  /** Check JavaScript variable instance type */
  type: jqLiteType,

  /** Get or set horizontal scroll position */
  scrollLeft: jqLiteScrollLeft,

  /** Get or set vertical scroll position */
  scrollTop: jqLiteScrollTop
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxTGl0ZS5qcyJdLCJuYW1lcyI6WyJqcUxpdGVBZGRDbGFzcyIsImVsZW1lbnQiLCJjc3NDbGFzc2VzIiwic2V0QXR0cmlidXRlIiwiZXhpc3RpbmdDbGFzc2VzIiwiX2dldEV4aXN0aW5nQ2xhc3NlcyIsInNwbGl0Q2xhc3NlcyIsInNwbGl0IiwiY3NzQ2xhc3MiLCJpIiwibGVuZ3RoIiwidHJpbSIsImluZGV4T2YiLCJqcUxpdGVDc3MiLCJuYW1lIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJnZXRDb21wdXRlZFN0eWxlIiwibmFtZVR5cGUiLCJqcUxpdGVUeXBlIiwia2V5Iiwic3R5bGUiLCJfY2FtZWxDYXNlIiwic3R5bGVPYmoiLCJpc0FycmF5IiwiX2dldEN1cnJDc3NQcm9wIiwib3V0T2JqIiwianFMaXRlSGFzQ2xhc3MiLCJjbHMiLCJnZXRBdHRyaWJ1dGUiLCJzb21ldmFyIiwidHlwZVN0ciIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInNsaWNlIiwidG9Mb3dlckNhc2UiLCJFcnJvciIsImpxTGl0ZU9uIiwiZXZlbnRzIiwiY2FsbGJhY2siLCJ1c2VDYXB0dXJlIiwiY2FjaGUiLCJfbXVpRXZlbnRDYWNoZSIsIm1hcCIsImV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInB1c2giLCJqcUxpdGVPZmYiLCJhcmdzTGlzdCIsImFyZ3MiLCJzcGxpY2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwianFMaXRlT25lIiwib25GbiIsImV2IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJqcUxpdGVTY3JvbGxMZWZ0Iiwid2luIiwid2luZG93IiwiZG9jRWwiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsTGVmdCIsImNsaWVudExlZnQiLCJzY3JvbGxUbyIsImpxTGl0ZVNjcm9sbFRvcCIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9wIiwiY2xpZW50VG9wIiwianFMaXRlT2Zmc2V0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJ3aWR0aCIsImpxTGl0ZVJlYWR5IiwiZm4iLCJkb25lIiwiZG9jIiwiZGVmYXVsdFZpZXciLCJyb290IiwiYWRkIiwicmVtIiwicHJlIiwiaW5pdCIsImUiLCJ0eXBlIiwicmVhZHlTdGF0ZSIsInBvbGwiLCJkb1Njcm9sbCIsInNldFRpbWVvdXQiLCJjcmVhdGVFdmVudE9iamVjdCIsImZyYW1lRWxlbWVudCIsImpxTGl0ZVJlbW92ZUNsYXNzIiwicmVwbGFjZSIsIlNQRUNJQUxfQ0hBUlNfUkVHRVhQIiwiTU9aX0hBQ0tfUkVHRVhQIiwiRVNDQVBFX1JFR0VYUCIsImNsYXNzZXMiLCJfIiwic2VwYXJhdG9yIiwibGV0dGVyIiwib2Zmc2V0IiwidG9VcHBlckNhc2UiLCJfZXNjYXBlUmVnRXhwIiwic3RyaW5nIiwiZWxlbSIsImNvbXB1dGVkIiwicmV0IiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm93bmVyRG9jdW1lbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwiYWRkQ2xhc3MiLCJjc3MiLCJoYXNDbGFzcyIsIm9mZiIsIm9uIiwib25lIiwicmVhZHkiLCJyZW1vdmVDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7O0FBR0E7Ozs7OztBQUtBLFNBQVNBLGNBQVQsQ0FBd0JDLE9BQXhCLEVBQWlDQyxVQUFqQyxFQUE2QztBQUMzQyxNQUFJLENBQUNBLFVBQUQsSUFBZSxDQUFDRCxRQUFRRSxZQUE1QixFQUEwQzs7QUFFMUMsTUFBSUMsa0JBQWtCQyxvQkFBb0JKLE9BQXBCLENBQXRCO0FBQUEsTUFDSUssZUFBZUosV0FBV0ssS0FBWCxDQUFpQixHQUFqQixDQURuQjtBQUFBLE1BRUlDLFFBRko7O0FBSUEsT0FBSyxJQUFJQyxJQUFFLENBQVgsRUFBY0EsSUFBSUgsYUFBYUksTUFBL0IsRUFBdUNELEdBQXZDLEVBQTRDO0FBQzFDRCxlQUFXRixhQUFhRyxDQUFiLEVBQWdCRSxJQUFoQixFQUFYO0FBQ0EsUUFB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OztBQWdCZjtBQUNBaUQsTUFBSW5GLFFBakJXOztBQW1CZjtBQUNBb0YsT0FBS3JFLFNBcEJVOztBQXNCZjtBQUNBc0UsU0FBTzVDLFdBdkJROztBQXlCZjtBQUNBNkMsZUFBYTNCLGlCQTFCRTs7QUE0QmY7QUFDQVAsUUFBTXhFLFVBN0JTOztBQStCZjtBQUNBK0MsY0FBWVAsZ0JBaENHOztBQWtDZjtBQUNBWSxhQUFXRjtBQW5DSSxDQUFqQiIsImZpbGUiOiJqcUxpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1VSSBDU1MvSlMganFMaXRlIG1vZHVsZVxuICogQG1vZHVsZSBsaWIvanFMaXRlXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cbi8qKlxuICogQWRkIGEgY2xhc3MgdG8gYW4gZWxlbWVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBET00gZWxlbWVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjc3NDbGFzc2VzIC0gU3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2YgY2xhc3MgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGpxTGl0ZUFkZENsYXNzKGVsZW1lbnQsIGNzc0NsYXNzZXMpIHtcbiAgaWYgKCFjc3NDbGFzc2VzIHx8ICFlbGVtZW50LnNldEF0dHJpYnV0ZSkgcmV0dXJuO1xuXG4gIHZhciBleGlzdGluZ0NsYXNzZXMgPSBfZ2V0RXhpc3RpbmdDbGFzc2VzKGVsZW1lbnQpLFxuICAgICAgc3BsaXRDbGFzc2VzID0gY3NzQ2xhc3Nlcy5zcGxpdCgnICcpLFxuICAgICAgY3NzQ2xhc3M7XG5cbiAgZm9yICh2YXIgaT0wOyBpIDwgc3BsaXRDbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY3NzQ2xhc3MgPSBzcGxpdENsYXNzZXNbaV0udHJpbSgpO1xuICAgIGlmIChleGlzdGluZ0NsYXNzZXMuaW5kZXhPZignICcgKyBjc3NDbGFzcyArICcgJykgPT09IC0xKSB7XG4gICAgICBleGlzdGluZ0NsYXNzZXMgKz0gY3NzQ2xhc3MgKyAnICc7XG4gICAgfVxuICB9XG4gIFxuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBleGlzdGluZ0NsYXNzZXMudHJpbSgpKTtcbn1cblxuXG4vKipcbiAqIEdldCBvciBzZXQgQ1NTIHByb3BlcnRpZXMuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgRE9NIGVsZW1lbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW25hbWVdIC0gVGhlIHByb3BlcnR5IG5hbWUuXG4gKiBAcGFyYW0ge3N0cmluZ30gW3ZhbHVlXSAtIFRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24ganFMaXRlQ3NzKGVsZW1lbnQsIG5hbWUsIHZhbHVlKSB7XG4gIC8vIFJldHVybiBmdWxsIHN0eWxlIG9iamVjdFxuICBpZiAobmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIH1cblxuICB2YXIgbmFtZVR5cGUgPSBqcUxpdGVUeXBlKG5hbWUpO1xuXG4gIC8vIFNldCBtdWx0aXBsZSB2YWx1ZXNcbiAgaWYgKG5hbWVUeXBlID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAodmFyIGtleSBpbiBuYW1lKSBlbGVtZW50LnN0eWxlW19jYW1lbENhc2Uoa2V5KV0gPSBuYW1lW2tleV07XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gU2V0IGEgc2luZ2xlIHZhbHVlXG4gIGlmIChuYW1lVHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIGVsZW1lbnQuc3R5bGVbX2NhbWVsQ2FzZShuYW1lKV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHZhciBzdHlsZU9iaiA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCksXG4gICAgICBpc0FycmF5ID0gKGpxTGl0ZVR5cGUobmFtZSkgPT09ICdhcnJheScpO1xuXG4gIC8vIFJlYWQgc2luZ2xlIHZhbHVlXG4gIGlmICghaXNBcnJheSkgcmV0dXJuIF9nZXRDdXJyQ3NzUHJvcChlbGVtZW50LCBuYW1lLCBzdHlsZU9iaik7XG5cbiAgLy8gUmVhZCBtdWx0aXBsZSB2YWx1ZXNcbiAgdmFyIG91dE9iaiA9IHt9LFxuICAgICAga2V5O1xuXG4gIGZvciAodmFyIGk9MDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBuYW1lW2ldO1xuICAgIG91dE9ialtrZXldID0gX2dldEN1cnJDc3NQcm9wKGVsZW1lbnQsIGtleSwgc3R5bGVPYmopO1xuICB9XG5cbiAgcmV0dXJuIG91dE9iajtcbn1cblxuXG4vKipcbiAqIENoZWNrIGlmIGVsZW1lbnQgaGFzIGNsYXNzLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIERPTSBlbGVtZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IGNscyAtIFRoZSBjbGFzcyBuYW1lIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24ganFMaXRlSGFzQ2xhc3MoZWxlbWVudCwgY2xzKSB7XG4gIGlmICghY2xzIHx8ICFlbGVtZW50LmdldEF0dHJpYnV0ZSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gKF9nZXRFeGlzdGluZ0NsYXNzZXMoZWxlbWVudCkuaW5kZXhPZignICcgKyBjbHMgKyAnICcpID4gLTEpO1xufVxuXG5cbi8qKlxuICogUmV0dXJuIHRoZSB0eXBlIG9mIGEgdmFyaWFibGUuXG4gKiBAcGFyYW0ge30gc29tZXZhciAtIFRoZSBKYXZhU2NyaXB0IHZhcmlhYmxlLlxuICovXG5mdW5jdGlvbiBqcUxpdGVUeXBlKHNvbWV2YXIpIHtcbiAgLy8gaGFuZGxlIHVuZGVmaW5lZFxuICBpZiAoc29tZXZhciA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJ3VuZGVmaW5lZCc7XG5cbiAgLy8gaGFuZGxlIG90aGVycyAob2YgdHlwZSBbb2JqZWN0IDxUeXBlPl0pXG4gIHZhciB0eXBlU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHNvbWV2YXIpO1xuICBpZiAodHlwZVN0ci5pbmRleE9mKCdbb2JqZWN0ICcpID09PSAwKSB7XG4gICAgcmV0dXJuIHR5cGVTdHIuc2xpY2UoOCwgLTEpLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTVVJOiBDb3VsZCBub3QgdW5kZXJzdGFuZCB0eXBlOiBcIiArIHR5cGVTdHIpO1xuICB9ICAgIFxufVxuXG5cbi8qKlxuICogQXR0YWNoIGFuIGV2ZW50IGhhbmRsZXIgdG8gYSBET00gZWxlbWVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIERPTSBlbGVtZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50cyAtIFNwYWNlIHNlcGFyYXRlZCBldmVudCBuYW1lcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlIC0gVXNlIGNhcHR1cmUgZmxhZy5cbiAqL1xuZnVuY3Rpb24ganFMaXRlT24oZWxlbWVudCwgZXZlbnRzLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICB1c2VDYXB0dXJlID0gKHVzZUNhcHR1cmUgPT09IHVuZGVmaW5lZCkgPyBmYWxzZSA6IHVzZUNhcHR1cmU7XG5cbiAgdmFyIGNhY2hlID0gZWxlbWVudC5fbXVpRXZlbnRDYWNoZSA9IGVsZW1lbnQuX211aUV2ZW50Q2FjaGUgfHwge307ICBcblxuICBldmVudHMuc3BsaXQoJyAnKS5tYXAoZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBhZGQgdG8gRE9NXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjaywgdXNlQ2FwdHVyZSk7XG5cbiAgICAvLyBhZGQgdG8gY2FjaGVcbiAgICBjYWNoZVtldmVudF0gPSBjYWNoZVtldmVudF0gfHwgW107XG4gICAgY2FjaGVbZXZlbnRdLnB1c2goW2NhbGxiYWNrLCB1c2VDYXB0dXJlXSk7XG4gIH0pO1xufVxuXG5cbi8qKlxuICogUmVtb3ZlIGFuIGV2ZW50IGhhbmRsZXIgZnJvbSBhIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgRE9NIGVsZW1lbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRzIC0gU3BhY2Ugc2VwYXJhdGVkIGV2ZW50IG5hbWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHVzZUNhcHR1cmUgLSBVc2UgY2FwdHVyZSBmbGFnLlxuICovXG5mdW5jdGlvbiBqcUxpdGVPZmYoZWxlbWVudCwgZXZlbnRzLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkge1xuICB1c2VDYXB0dXJlID0gKHVzZUNhcHR1cmUgPT09IHVuZGVmaW5lZCkgPyBmYWxzZSA6IHVzZUNhcHR1cmU7XG5cbiAgLy8gcmVtb3ZlIGZyb20gY2FjaGVcbiAgdmFyIGNhY2hlID0gZWxlbWVudC5fbXVpRXZlbnRDYWNoZSA9IGVsZW1lbnQuX211aUV2ZW50Q2FjaGUgfHwge30sXG4gICAgICBhcmdzTGlzdCxcbiAgICAgIGFyZ3MsXG4gICAgICBpO1xuXG4gIGV2ZW50cy5zcGxpdCgnICcpLm1hcChmdW5jdGlvbihldmVudCkge1xuICAgIGFyZ3NMaXN0ID0gY2FjaGVbZXZlbnRdIHx8IFtdO1xuXG4gICAgaSA9IGFyZ3NMaXN0Lmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBhcmdzID0gYXJnc0xpc3RbaV07XG5cbiAgICAgIC8vIHJlbW92ZSBhbGwgZXZlbnRzIGlmIGNhbGxiYWNrIGlzIHVuZGVmaW5lZFxuICAgICAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAoYXJnc1swXSA9PT0gY2FsbGJhY2sgJiYgYXJnc1sxXSA9PT0gdXNlQ2FwdHVyZSkpIHtcblxuICAgICAgICAvLyByZW1vdmUgZnJvbSBjYWNoZVxuICAgICAgICBhcmdzTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgIFxuICAgICAgICAvLyByZW1vdmUgZnJvbSBET01cbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5cbi8qKlxuICogQXR0YWNoIGFuIGV2ZW50IGhhbmRlciB3aGljaCB3aWxsIG9ubHkgZXhlY3V0ZSBvbmNlIHBlciBlbGVtZW50IHBlciBldmVudFxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIERPTSBlbGVtZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50cyAtIFNwYWNlIHNlcGFyYXRlZCBldmVudCBuYW1lcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlIC0gVXNlIGNhcHR1cmUgZmxhZy5cbiAqL1xuZnVuY3Rpb24ganFMaXRlT25lKGVsZW1lbnQsIGV2ZW50cywgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgZXZlbnRzLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAganFMaXRlT24oZWxlbWVudCwgZXZlbnQsIGZ1bmN0aW9uIG9uRm4oZXYpIHtcbiAgICAgIC8vIGV4ZWN1dGUgY2FsbGJhY2tcbiAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgLy8gcmVtb3ZlIHdyYXBwZXJcbiAgICAgIGpxTGl0ZU9mZihlbGVtZW50LCBldmVudCwgb25GbiwgdXNlQ2FwdHVyZSk7XG4gICAgfSwgdXNlQ2FwdHVyZSk7XG4gIH0pO1xufVxuXG5cbi8qKlxuICogR2V0IG9yIHNldCBob3Jpem9udGFsIHNjcm9sbCBwb3NpdGlvblxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gVGhlIERPTSBlbGVtZW50XG4gKiBAcGFyYW0ge251bWJlcn0gW3ZhbHVlXSAtIFRoZSBzY3JvbGwgcG9zaXRpb25cbiAqL1xuZnVuY3Rpb24ganFMaXRlU2Nyb2xsTGVmdChlbGVtZW50LCB2YWx1ZSkge1xuICB2YXIgd2luID0gd2luZG93O1xuXG4gIC8vIGdldFxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChlbGVtZW50ID09PSB3aW4pIHtcbiAgICAgIHZhciBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIHJldHVybiAod2luLnBhZ2VYT2Zmc2V0IHx8IGRvY0VsLnNjcm9sbExlZnQpIC0gKGRvY0VsLmNsaWVudExlZnQgfHwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgfVxuICB9XG5cbiAgLy8gc2V0XG4gIGlmIChlbGVtZW50ID09PSB3aW4pIHdpbi5zY3JvbGxUbyh2YWx1ZSwganFMaXRlU2Nyb2xsVG9wKHdpbikpO1xuICBlbHNlIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IHZhbHVlO1xufVxuXG5cbi8qKlxuICogR2V0IG9yIHNldCB2ZXJ0aWNhbCBzY3JvbGwgcG9zaXRpb25cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBET00gZWxlbWVudFxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGhlIHNjcm9sbCBwb3NpdGlvblxuICovXG5mdW5jdGlvbiBqcUxpdGVTY3JvbGxUb3AoZWxlbWVudCwgdmFsdWUpIHtcbiAgdmFyIHdpbiA9IHdpbmRvdztcblxuICAvLyBnZXRcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoZWxlbWVudCA9PT0gd2luKSB7XG4gICAgICB2YXIgZG9jRWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICByZXR1cm4gKHdpbi5wYWdlWU9mZnNldCB8fCBkb2NFbC5zY3JvbGxUb3ApIC0gKGRvY0VsLmNsaWVudFRvcCB8fCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNldFxuICBpZiAoZWxlbWVudCA9PT0gd2luKSB3aW4uc2Nyb2xsVG8oanFMaXRlU2Nyb2xsTGVmdCh3aW4pLCB2YWx1ZSk7XG4gIGVsc2UgZWxlbWVudC5zY3JvbGxUb3AgPSB2YWx1ZTtcbn1cblxuXG4vKipcbiAqIFJldHVybiBvYmplY3QgcmVwcmVzZW50aW5nIHRvcC9sZWZ0IG9mZnNldCBhbmQgZWxlbWVudCBoZWlnaHQvd2lkdGguXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgLSBUaGUgRE9NIGVsZW1lbnQuXG4gKi9cbmZ1bmN0aW9uIGpxTGl0ZU9mZnNldChlbGVtZW50KSB7XG4gIHZhciB3aW4gPSB3aW5kb3csXG4gICAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHNjcm9sbFRvcCA9IGpxTGl0ZVNjcm9sbFRvcCh3aW4pLFxuICAgICAgc2Nyb2xsTGVmdCA9IGpxTGl0ZVNjcm9sbExlZnQod2luKTtcblxuICByZXR1cm4ge1xuICAgIHRvcDogcmVjdC50b3AgKyBzY3JvbGxUb3AsXG4gICAgbGVmdDogcmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgIHdpZHRoOiByZWN0LndpZHRoXG4gIH07XG59XG5cblxuLyoqXG4gKiBBdHRhY2ggYSBjYWxsYmFjayB0byB0aGUgRE9NIHJlYWR5IGV2ZW50IGxpc3RlbmVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiAtIFRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24ganFMaXRlUmVhZHkoZm4pIHtcbiAgdmFyIGRvbmUgPSBmYWxzZSxcbiAgICAgIHRvcCA9IHRydWUsXG4gICAgICBkb2MgPSBkb2N1bWVudCxcbiAgICAgIHdpbiA9IGRvYy5kZWZhdWx0VmlldyxcbiAgICAgIHJvb3QgPSBkb2MuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgYWRkID0gZG9jLmFkZEV2ZW50TGlzdGVuZXIgPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAnYXR0YWNoRXZlbnQnLFxuICAgICAgcmVtID0gZG9jLmFkZEV2ZW50TGlzdGVuZXIgPyAncmVtb3ZlRXZlbnRMaXN0ZW5lcicgOiAnZGV0YWNoRXZlbnQnLFxuICAgICAgcHJlID0gZG9jLmFkZEV2ZW50TGlzdGVuZXIgPyAnJyA6ICdvbic7XG5cbiAgdmFyIGluaXQgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUudHlwZSA9PSAncmVhZHlzdGF0ZWNoYW5nZScgJiYgZG9jLnJlYWR5U3RhdGUgIT0gJ2NvbXBsZXRlJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIChlLnR5cGUgPT0gJ2xvYWQnID8gd2luIDogZG9jKVtyZW1dKHByZSArIGUudHlwZSwgaW5pdCwgZmFsc2UpO1xuICAgIGlmICghZG9uZSAmJiAoZG9uZSA9IHRydWUpKSBmbi5jYWxsKHdpbiwgZS50eXBlIHx8IGUpO1xuICB9O1xuXG4gIHZhciBwb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHsgcm9vdC5kb1Njcm9sbCgnbGVmdCcpOyB9IGNhdGNoKGUpIHsgc2V0VGltZW91dChwb2xsLCA1MCk7IHJldHVybjsgfVxuICAgIGluaXQoJ3BvbGwnKTtcbiAgfTtcblxuICBpZiAoZG9jLnJlYWR5U3RhdGUgPT0gJ2NvbXBsZXRlJykge1xuICAgIGZuLmNhbGwod2luLCAnbGF6eScpO1xuICB9IGVsc2Uge1xuICAgIGlmIChkb2MuY3JlYXRlRXZlbnRPYmplY3QgJiYgcm9vdC5kb1Njcm9sbCkge1xuICAgICAgdHJ5IHsgdG9wID0gIXdpbi5mcmFtZUVsZW1lbnQ7IH0gY2F0Y2goZSkgeyB9XG4gICAgICBpZiAodG9wKSBwb2xsKCk7XG4gICAgfVxuICAgIGRvY1thZGRdKHByZSArICdET01Db250ZW50TG9hZGVkJywgaW5pdCwgZmFsc2UpO1xuICAgIGRvY1thZGRdKHByZSArICdyZWFkeXN0YXRlY2hhbmdlJywgaW5pdCwgZmFsc2UpO1xuICAgIHdpblthZGRdKHByZSArICdsb2FkJywgaW5pdCwgZmFsc2UpO1xuICB9XG59XG5cblxuLyoqXG4gKiBSZW1vdmUgY2xhc3NlcyBmcm9tIGEgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBET00gZWxlbWVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBjc3NDbGFzc2VzIC0gU3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2YgY2xhc3MgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGpxTGl0ZVJlbW92ZUNsYXNzKGVsZW1lbnQsIGNzc0NsYXNzZXMpIHtcbiAgaWYgKCFjc3NDbGFzc2VzIHx8ICFlbGVtZW50LnNldEF0dHJpYnV0ZSkgcmV0dXJuO1xuXG4gIHZhciBleGlzdGluZ0NsYXNzZXMgPSBfZ2V0RXhpc3RpbmdDbGFzc2VzKGVsZW1lbnQpLFxuICAgICAgc3BsaXRDbGFzc2VzID0gY3NzQ2xhc3Nlcy5zcGxpdCgnICcpLFxuICAgICAgY3NzQ2xhc3M7XG4gIFxuICBmb3IgKHZhciBpPTA7IGkgPCBzcGxpdENsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjc3NDbGFzcyA9IHNwbGl0Q2xhc3Nlc1tpXS50cmltKCk7XG4gICAgd2hpbGUgKGV4aXN0aW5nQ2xhc3Nlcy5pbmRleE9mKCcgJyArIGNzc0NsYXNzICsgJyAnKSA+PSAwKSB7XG4gICAgICBleGlzdGluZ0NsYXNzZXMgPSBleGlzdGluZ0NsYXNzZXMucmVwbGFjZSgnICcgKyBjc3NDbGFzcyArICcgJywgJyAnKTtcbiAgICB9XG4gIH1cblxuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBleGlzdGluZ0NsYXNzZXMudHJpbSgpKTtcbn1cblxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFV0aWxpdGllc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgU1BFQ0lBTF9DSEFSU19SRUdFWFAgPSAvKFtcXDpcXC1cXF9dKyguKSkvZyxcbiAgICBNT1pfSEFDS19SRUdFWFAgPSAvXm1veihbQS1aXSkvLFxuICAgIEVTQ0FQRV9SRUdFWFAgPSAvKFsuKis/Xj0hOiR7fSgpfFxcW1xcXVxcL1xcXFxdKS9nO1xuXG5cbmZ1bmN0aW9uIF9nZXRFeGlzdGluZ0NsYXNzZXMoZWxlbWVudCkge1xuICB2YXIgY2xhc3NlcyA9IChlbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykucmVwbGFjZSgvW1xcblxcdF0vZywgJycpO1xuICByZXR1cm4gJyAnICsgY2xhc3NlcyArICcgJztcbn1cblxuXG5mdW5jdGlvbiBfY2FtZWxDYXNlKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUuXG4gICAgcmVwbGFjZShTUEVDSUFMX0NIQVJTX1JFR0VYUCwgZnVuY3Rpb24oXywgc2VwYXJhdG9yLCBsZXR0ZXIsIG9mZnNldCkge1xuICAgICAgcmV0dXJuIG9mZnNldCA/IGxldHRlci50b1VwcGVyQ2FzZSgpIDogbGV0dGVyO1xuICAgIH0pLlxuICAgIHJlcGxhY2UoTU9aX0hBQ0tfUkVHRVhQLCAnTW96JDEnKTtcbn1cblxuXG5mdW5jdGlvbiBfZXNjYXBlUmVnRXhwKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoRVNDQVBFX1JFR0VYUCwgXCJcXFxcJDFcIik7XG59XG5cblxuZnVuY3Rpb24gX2dldEN1cnJDc3NQcm9wKGVsZW0sIG5hbWUsIGNvbXB1dGVkKSB7XG4gIHZhciByZXQ7XG5cbiAgLy8gdHJ5IGNvbXB1dGVkIHN0eWxlXG4gIHJldCA9IGNvbXB1dGVkLmdldFByb3BlcnR5VmFsdWUobmFtZSk7XG5cbiAgLy8gdHJ5IHN0eWxlIGF0dHJpYnV0ZSAoaWYgZWxlbWVudCBpcyBub3QgYXR0YWNoZWQgdG8gZG9jdW1lbnQpXG4gIGlmIChyZXQgPT09ICcnICYmICFlbGVtLm93bmVyRG9jdW1lbnQpIHJldCA9IGVsZW0uc3R5bGVbX2NhbWVsQ2FzZShuYW1lKV07XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuXG4vKipcbiAqIE1vZHVsZSBBUElcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8qKiBBZGQgY2xhc3NlcyAqL1xuICBhZGRDbGFzczoganFMaXRlQWRkQ2xhc3MsXG5cbiAgLyoqIEdldCBvciBzZXQgQ1NTIHByb3BlcnRpZXMgKi9cbiAgY3NzOiBqcUxpdGVDc3MsXG5cbiAgLyoqIENoZWNrIGZvciBjbGFzcyAqL1xuICBoYXNDbGFzczoganFMaXRlSGFzQ2xhc3MsXG5cbiAgLyoqIFJlbW92ZSBldmVudCBoYW5kbGVycyAqL1xuICBvZmY6IGpxTGl0ZU9mZixcblxuICAvKiogUmV0dXJuIG9mZnNldCB2YWx1ZXMgKi9cbiAgb2Zmc2V0OiBqcUxpdGVPZmZzZXQsXG5cbiAgLyoqIEFkZCBldmVudCBoYW5kbGVycyAqL1xuICBvbjoganFMaXRlT24sXG5cbiAgLyoqIEFkZCBhbiBleGVjdXRlLW9uY2UgZXZlbnQgaGFuZGxlciAqL1xuICBvbmU6IGpxTGl0ZU9uZSxcblxuICAvKiogRE9NIHJlYWR5IGV2ZW50IGhhbmRsZXIgKi9cbiAgcmVhZHk6IGpxTGl0ZVJlYWR5LFxuXG4gIC8qKiBSZW1vdmUgY2xhc3NlcyAqL1xuICByZW1vdmVDbGFzczoganFMaXRlUmVtb3ZlQ2xhc3MsXG5cbiAgLyoqIENoZWNrIEphdmFTY3JpcHQgdmFyaWFibGUgaW5zdGFuY2UgdHlwZSAqL1xuICB0eXBlOiBqcUxpdGVUeXBlLFxuXG4gIC8qKiBHZXQgb3Igc2V0IGhvcml6b250YWwgc2Nyb2xsIHBvc2l0aW9uICovXG4gIHNjcm9sbExlZnQ6IGpxTGl0ZVNjcm9sbExlZnQsXG5cbiAgLyoqIEdldCBvciBzZXQgdmVydGljYWwgc2Nyb2xsIHBvc2l0aW9uICovXG4gIHNjcm9sbFRvcDoganFMaXRlU2Nyb2xsVG9wXG59O1xuIl19
},{}],5:[function(require,module,exports){
/**
 * MUI CSS/JS utilities module
 * @module lib/util
 */

'use strict';

var config = require('../config'),
    jqLite = require('./jqLite'),
    scrollLock = 0,
    scrollLockCls = 'mui-scroll-lock',
    scrollLockPos,
    scrollStyleEl,
    scrollEventHandler,
    _scrollBarWidth,
    _supportsPointerEvents;

scrollEventHandler = function scrollEventHandler(ev) {
  // stop propagation on window scroll events
  if (!ev.target.tagName) ev.stopImmediatePropagation();
};

/**
 * Logging function
 */
function logFn() {
  var win = window;

  if (config.debug && typeof win.console !== "undefined") {
    try {
      win.console.log.apply(win.console, arguments);
    } catch (a) {
      var e = Array.prototype.slice.call(arguments);
      win.console.log(e.join("\n"));
    }
  }
}

/**
 * Load CSS text in new stylesheet
 * @param {string} cssText - The css text.
 */
function loadStyleFn(cssText) {
  var doc = document,
      head;

  // copied from jQuery 
  head = doc.head || doc.getElementsByTagName('head')[0] || doc.documentElement;

  var e = doc.createElement('style');
  e.type = 'text/css';

  if (e.styleSheet) e.styleSheet.cssText = cssText;else e.appendChild(doc.createTextNode(cssText));

  // add to document
  head.insertBefore(e, head.firstChild);

  return e;
}

/**
 * Raise an error
 * @param {string} msg - The error message.
 */
function raiseErrorFn(msg, useConsole) {
  if (useConsole) {
    if (typeof console !== 'undefined') console.warn('MUI Warning: ' + msg);
  } else {
    throw new Error('MUI: ' + msg);
  }
}

/**
 * Convert Classname object, with class as key and true/false as value, to an
 * class string.
 * @param  {Object} classes The classes
 * @return {String}         class string
 */
function classNamesFn(classes) {
  var cs = '';
  for (var i in classes) {
    cs += classes[i] ? i + ' ' : '';
  }
  return cs.trim();
}

/**
 * Check if client supports pointer events.
 */
function supportsPointerEventsFn() {
  // check cache
  if (_supportsPointerEvents !== undefined) return _supportsPointerEvents;

  var element = document.createElement('x');
  element.style.cssText = 'pointer-events:auto';
  _supportsPointerEvents = element.style.pointerEvents === 'auto';
  return _supportsPointerEvents;
}

/**
 * Create callback closure.
 * @param {Object} instance - The object instance.
 * @param {String} funcName - The name of the callback function.
 */
function callbackFn(instance, funcName) {
  return function () {
    instance[funcName].apply(instance, arguments);
  };
}

/**
 * Dispatch event.
 * @param {Element} element - The DOM element.
 * @param {String} eventType - The event type.
 * @param {Boolean} bubbles=true - If true, event bubbles.
 * @param {Boolean} cancelable=true = If true, event is cancelable
 * @param {Object} [data] - Data to add to event object
 */
function dispatchEventFn(element, eventType, bubbles, cancelable, data) {
  var ev = document.createEvent('HTMLEvents'),
      bubbles = bubbles !== undefined ? bubbles : true,
      cancelable = cancelable !== undefined ? cancelable : true,
      k;

  ev.initEvent(eventType, bubbles, cancelable);

  // add data to event object
  if (data) for (k in data) {
    ev[k] = data[k];
  } // dispatch
  if (element) element.dispatchEvent(ev);

  return ev;
}

/**
 * Turn on window scroll lock.
 */
function enableScrollLockFn() {
  // increment counter
  scrollLock += 1;

  // add lock
  if (scrollLock === 1) {
    var doc = document,
        win = window,
        htmlEl = doc.documentElement,
        bodyEl = doc.body,
        scrollBarWidth = getScrollBarWidth(),
        cssProps,
        cssStr,
        x;

    // define scroll lock class dynamically
    cssProps = ['overflow:hidden'];

    if (scrollBarWidth) {
      // scrollbar-y
      if (htmlEl.scrollHeight > htmlEl.clientHeight) {
        x = parseInt(jqLite.css(bodyEl, 'padding-right')) + scrollBarWidth;
        cssProps.push('padding-right:' + x + 'px');
      }

      // scrollbar-x
      if (htmlEl.scrollWidth > htmlEl.clientWidth) {
        x = parseInt(jqLite.css(bodyEl, 'padding-bottom')) + scrollBarWidth;
        cssProps.push('padding-bottom:' + x + 'px');
      }
    }

    // define css class dynamically
    cssStr = '.' + scrollLockCls + '{';
    cssStr += cssProps.join(' !important;') + ' !important;}';
    scrollStyleEl = loadStyleFn(cssStr);

    // cancel 'scroll' event listener callbacks
    jqLite.on(win, 'scroll', scrollEventHandler, true);

    // add scroll lock
    scrollLockPos = { left: jqLite.scrollLeft(win), top: jqLite.scrollTop(win) };
    jqLite.addClass(bodyEl, scrollLockCls);
  }
}

/**
 * Turn off window scroll lock.
 * @param {Boolean} resetPos - Reset scroll position to original value.
 */
function disableScrollLockFn(resetPos) {
  // ignore
  if (scrollLock === 0) return;

  // decrement counter
  scrollLock -= 1;

  // remove lock 
  if (scrollLock === 0) {
    // remove scroll lock and delete style element
    jqLite.removeClass(document.body, scrollLockCls);

    // restore scroll position
    if (resetPos) window.scrollTo(scrollLockPos.left, scrollLockPos.top);

    // restore scroll event listeners
    jqLite.off(window, 'scroll', scrollEventHandler, true);

    // delete style element (deferred for Firefox Quantum bugfix)
    setTimeout(function () {
      scrollStyleEl.parentNode.removeChild(scrollStyleEl);
    }, 0);
  }
}

/**
 * Return scroll bar width.
 */
var getScrollBarWidth = function getScrollBarWidth() {
  // check cache
  if (_scrollBarWidth !== undefined) return _scrollBarWidth;

  // calculate scroll bar width
  var doc = document,
      bodyEl = doc.body,
      el = doc.createElement('div');

  el.innerHTML = '<div style="width:50px;height:50px;position:absolute;' + 'left:-50px;top:-50px;overflow:auto;"><div style="width:1px;' + 'height:100px;"></div></div>';
  el = el.firstChild;
  bodyEl.appendChild(el);
  _scrollBarWidth = el.offsetWidth - el.clientWidth;
  bodyEl.removeChild(el);

  return _scrollBarWidth;
};

/**
 * requestAnimationFrame polyfilled
 * @param {Function} callback - The callback function
 */
function requestAnimationFrameFn(callback) {
  var fn = window.requestAnimationFrame;
  if (fn) fn(callback);else setTimeout(callback, 0);
}

/**
 * Define the module API
 */
module.exports = {
  /** Create callback closures */
  callback: callbackFn,

  /** Classnames object to string */
  classNames: classNamesFn,

  /** Disable scroll lock */
  disableScrollLock: disableScrollLockFn,

  /** Dispatch event */
  dispatchEvent: dispatchEventFn,

  /** Enable scroll lock */
  enableScrollLock: enableScrollLockFn,

  /** Log messages to the console when debug is turned on */
  log: logFn,

  /** Load CSS text as new stylesheet */
  loadStyle: loadStyleFn,

  /** Raise MUI error */
  raiseError: raiseErrorFn,

  /** Request animation frame */
  requestAnimationFrame: requestAnimationFrameFn,

  /** Support Pointer Events check */
  supportsPointerEvents: supportsPointerEventsFn
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwuanMiXSwibmFtZXMiOlsiY29uZmlnIiwicmVxdWlyZSIsImpxTGl0ZSIsInNjcm9sbExvY2siLCJzY3JvbGxMb2NrQ2xzIiwic2Nyb2xsTG9ja1BvcyIsInNjcm9sbFN0eWxlRWwiLCJzY3JvbGxFdmVudEhhbmRsZXIiLCJfc2Nyb2xsQmFyV2lkdGgiLCJfc3VwcG9ydHNQb2ludGVyRXZlbnRzIiwiZXYiLCJ0YXJnZXQiLCJ0YWdOYW1lIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwibG9nRm4iLCJ3aW4iLCJ3aW5kb3ciLCJkZWJ1ZyIsImNvbnNvbGUiLCJsb2ciLCJhcHBseSIsImFyZ3VtZW50cyIsImEiLCJlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJqb2luIiwibG9hZFN0eWxlRm4iLCJjc3NUZXh0IiwiZG9jIiwiZG9jdW1lbnQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJkb2N1bWVudEVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInN0eWxlU2hlZXQiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiZmlyc3RDaGlsZCIsInJhaXNlRXJyb3JGbiIsIm1zZyIsInVzZUNvbnNvbGUiLCJ3YXJuIiwiRXJyb3IiLCJjbGFzc05hbWVzRm4iLCJjbGFzc2VzIiwiY3MiLCJpIiwidHJpbSIsInN1cHBvcnRzUG9pbnRlckV2ZW50c0ZuIiwidW5kZWZpbmVkIiwiZWxlbWVudCIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsImNhbGxiYWNrRm4iLCJpbnN0YW5jZSIsImZ1bmNOYW1lIiwiZGlzcGF0Y2hFdmVudEZuIiwiZXZlbnRUeXBlIiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJkYXRhIiwiY3JlYXRlRXZlbnQiLCJrIiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCIsImVuYWJsZVNjcm9sbExvY2tGbiIsImh0bWxFbCIsImJvZHlFbCIsImJvZHkiLCJzY3JvbGxCYXJXaWR0aCIsImdldFNjcm9sbEJhcldpZHRoIiwiY3NzUHJvcHMiLCJjc3NTdHIiLCJ4Iiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicGFyc2VJbnQiLCJjc3MiLCJwdXNoIiwic2Nyb2xsV2lkdGgiLCJjbGllbnRXaWR0aCIsIm9uIiwibGVmdCIsInNjcm9sbExlZnQiLCJ0b3AiLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsImRpc2FibGVTY3JvbGxMb2NrRm4iLCJyZXNldFBvcyIsInJlbW92ZUNsYXNzIiwic2Nyb2xsVG8iLCJvZmYiLCJzZXRUaW1lb3V0IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZWwiLCJpbm5lckhUTUwiLCJvZmZzZXRXaWR0aCIsInJlcXVlc3RBbmltYXRpb25GcmFtZUZuIiwiY2FsbGJhY2siLCJmbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJjbGFzc05hbWVzIiwiZGlzYWJsZVNjcm9sbExvY2siLCJlbmFibGVTY3JvbGxMb2NrIiwibG9hZFN0eWxlIiwicmFpc2VFcnJvciIsInN1cHBvcnRzUG9pbnRlckV2ZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7O0FBR0EsSUFBSUEsU0FBU0MsUUFBUSxXQUFSLENBQWI7QUFBQSxJQUNJQyxTQUFTRCxRQUFRLFVBQVIsQ0FEYjtBQUFBLElBRUlFLGFBQWEsQ0FGakI7QUFBQSxJQUdJQyxnQkFBZ0IsaUJBSHBCO0FBQUEsSUFJSUMsYUFKSjtBQUFBLElBS0lDLGFBTEo7QUFBQSxJQU1JQyxrQkFOSjtBQUFBLElBT0lDLGVBUEo7QUFBQSxJQVFJQyxzQkFSSjs7QUFXQUYscUJBQXFCLDRCQUFTRyxFQUFULEVBQWE7QUFDaEM7QUFDQSxNQUFJLENBQUNBLEdBQUdDLE1BQUgsQ0FBVUMsT0FBZixFQUF3QkYsR0FBR0csd0JBQUg7QUFDekIsQ0FIRDs7QUFNQTs7O0FBR0EsU0FBU0MsS0FBVCxHQUFpQjtBQUNmLE1BQUlDLE1BQU1DLE1BQVY7O0FBRUEs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ImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNVUkgQ1NTL0pTIHV0aWxpdGllcyBtb2R1bGVcbiAqIEBtb2R1bGUgbGliL3V0aWxcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4uL2NvbmZpZycpLFxuICAgIGpxTGl0ZSA9IHJlcXVpcmUoJy4vanFMaXRlJyksXG4gICAgc2Nyb2xsTG9jayA9IDAsXG4gICAgc2Nyb2xsTG9ja0NscyA9ICdtdWktc2Nyb2xsLWxvY2snLFxuICAgIHNjcm9sbExvY2tQb3MsXG4gICAgc2Nyb2xsU3R5bGVFbCxcbiAgICBzY3JvbGxFdmVudEhhbmRsZXIsXG4gICAgX3Njcm9sbEJhcldpZHRoLFxuICAgIF9zdXBwb3J0c1BvaW50ZXJFdmVudHM7XG5cblxuc2Nyb2xsRXZlbnRIYW5kbGVyID0gZnVuY3Rpb24oZXYpIHtcbiAgLy8gc3RvcCBwcm9wYWdhdGlvbiBvbiB3aW5kb3cgc2Nyb2xsIGV2ZW50c1xuICBpZiAoIWV2LnRhcmdldC50YWdOYW1lKSBldi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbn1cblxuXG4vKipcbiAqIExvZ2dpbmcgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gbG9nRm4oKSB7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG4gIFxuICBpZiAoY29uZmlnLmRlYnVnICYmIHR5cGVvZiB3aW4uY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHRyeSB7XG4gICAgICB3aW4uY29uc29sZS5sb2cuYXBwbHkod2luLmNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gICAgfSBjYXRjaCAoYSkge1xuICAgICAgdmFyIGUgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgd2luLmNvbnNvbGUubG9nKGUuam9pbihcIlxcblwiKSk7XG4gICAgfVxuICB9XG59XG5cblxuLyoqXG4gKiBMb2FkIENTUyB0ZXh0IGluIG5ldyBzdHlsZXNoZWV0XG4gKiBAcGFyYW0ge3N0cmluZ30gY3NzVGV4dCAtIFRoZSBjc3MgdGV4dC5cbiAqL1xuZnVuY3Rpb24gbG9hZFN0eWxlRm4oY3NzVGV4dCkge1xuICB2YXIgZG9jID0gZG9jdW1lbnQsXG4gICAgICBoZWFkO1xuICBcbiAgLy8gY29waWVkIGZyb20galF1ZXJ5IFxuICBoZWFkID0gZG9jLmhlYWQgfHxcbiAgICBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSB8fFxuICAgIGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gIFxuICB2YXIgZSA9IGRvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBlLnR5cGUgPSAndGV4dC9jc3MnO1xuICBcbiAgaWYgKGUuc3R5bGVTaGVldCkgZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3NUZXh0O1xuICBlbHNlIGUuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZVRleHROb2RlKGNzc1RleHQpKTtcbiAgXG4gIC8vIGFkZCB0byBkb2N1bWVudFxuICBoZWFkLmluc2VydEJlZm9yZShlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuICBcbiAgcmV0dXJuIGU7XG59XG5cblxuLyoqXG4gKiBSYWlzZSBhbiBlcnJvclxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyAtIFRoZSBlcnJvciBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiByYWlzZUVycm9yRm4obXNnLCB1c2VDb25zb2xlKSB7XG4gIGlmICh1c2VDb25zb2xlKSB7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykgY29uc29sZS53YXJuKCdNVUkgV2FybmluZzogJyArIG1zZyk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNVUk6ICcgKyBtc2cpO1xuICB9XG59XG5cblxuLyoqXG4gKiBDb252ZXJ0IENsYXNzbmFtZSBvYmplY3QsIHdpdGggY2xhc3MgYXMga2V5IGFuZCB0cnVlL2ZhbHNlIGFzIHZhbHVlLCB0byBhblxuICogY2xhc3Mgc3RyaW5nLlxuICogQHBhcmFtICB7T2JqZWN0fSBjbGFzc2VzIFRoZSBjbGFzc2VzXG4gKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgY2xhc3Mgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIGNsYXNzTmFtZXNGbihjbGFzc2VzKSB7XG4gIHZhciBjcyA9ICcnO1xuICBmb3IgKHZhciBpIGluIGNsYXNzZXMpIHtcbiAgICBjcyArPSAoY2xhc3Nlc1tpXSkgPyBpICsgJyAnIDogJyc7XG4gIH1cbiAgcmV0dXJuIGNzLnRyaW0oKTtcbn1cblxuXG4vKipcbiAqIENoZWNrIGlmIGNsaWVudCBzdXBwb3J0cyBwb2ludGVyIGV2ZW50cy5cbiAqL1xuZnVuY3Rpb24gc3VwcG9ydHNQb2ludGVyRXZlbnRzRm4oKSB7XG4gIC8vIGNoZWNrIGNhY2hlXG4gIGlmIChfc3VwcG9ydHNQb2ludGVyRXZlbnRzICE9PSB1bmRlZmluZWQpIHJldHVybiBfc3VwcG9ydHNQb2ludGVyRXZlbnRzO1xuICBcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd4Jyk7XG4gIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9ICdwb2ludGVyLWV2ZW50czphdXRvJztcbiAgX3N1cHBvcnRzUG9pbnRlckV2ZW50cyA9IChlbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPT09ICdhdXRvJyk7XG4gIHJldHVybiBfc3VwcG9ydHNQb2ludGVyRXZlbnRzO1xufVxuXG5cbi8qKlxuICogQ3JlYXRlIGNhbGxiYWNrIGNsb3N1cmUuXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2UgLSBUaGUgb2JqZWN0IGluc3RhbmNlLlxuICogQHBhcmFtIHtTdHJpbmd9IGZ1bmNOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjYWxsYmFja0ZuKGluc3RhbmNlLCBmdW5jTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7aW5zdGFuY2VbZnVuY05hbWVdLmFwcGx5KGluc3RhbmNlLCBhcmd1bWVudHMpO307XG59XG5cblxuLyoqXG4gKiBEaXNwYXRjaCBldmVudC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudCAtIFRoZSBET00gZWxlbWVudC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFR5cGUgLSBUaGUgZXZlbnQgdHlwZS5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gYnViYmxlcz10cnVlIC0gSWYgdHJ1ZSwgZXZlbnQgYnViYmxlcy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY2FuY2VsYWJsZT10cnVlID0gSWYgdHJ1ZSwgZXZlbnQgaXMgY2FuY2VsYWJsZVxuICogQHBhcmFtIHtPYmplY3R9IFtkYXRhXSAtIERhdGEgdG8gYWRkIHRvIGV2ZW50IG9iamVjdFxuICovXG5mdW5jdGlvbiBkaXNwYXRjaEV2ZW50Rm4oZWxlbWVudCwgZXZlbnRUeXBlLCBidWJibGVzLCBjYW5jZWxhYmxlLCBkYXRhKSB7XG4gIHZhciBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdIVE1MRXZlbnRzJyksXG4gICAgICBidWJibGVzID0gKGJ1YmJsZXMgIT09IHVuZGVmaW5lZCkgPyBidWJibGVzIDogdHJ1ZSxcbiAgICAgICBjYW5jZWxhYmxlID0gKGNhbmNlbGFibGUgIT09IHVuZGVmaW5lZCkgPyBjYW5jZWxhYmxlIDogdHJ1ZSxcbiAgICAgICBrO1xuXG4gIGV2LmluaXRFdmVudChldmVudFR5cGUsIGJ1YmJsZXMsIGNhbmNlbGFibGUpO1xuICBcbiAgLy8gYWRkIGRhdGEgdG8gZXZlbnQgb2JqZWN0XG4gIGlmIChkYXRhKSBmb3IgKGsgaW4gZGF0YSkgZXZba10gPSBkYXRhW2tdO1xuICBcbiAgLy8gZGlzcGF0Y2hcbiAgaWYgKGVsZW1lbnQpIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldik7XG4gIFxuICByZXR1cm4gZXY7XG59XG5cblxuLyoqXG4gKiBUdXJuIG9uIHdpbmRvdyBzY3JvbGwgbG9jay5cbiAqL1xuZnVuY3Rpb24gZW5hYmxlU2Nyb2xsTG9ja0ZuKCkge1xuICAvLyBpbmNyZW1lbnQgY291bnRlclxuICBzY3JvbGxMb2NrICs9IDE7XG4gIFxuICAvLyBhZGQgbG9ja1xuICBpZiAoc2Nyb2xsTG9jayA9PT0gMSkge1xuICAgIHZhciBkb2MgPSBkb2N1bWVudCxcbiAgICAgICAgd2luID0gd2luZG93LFxuICAgICAgICBodG1sRWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICBib2R5RWwgPSBkb2MuYm9keSxcbiAgICAgICAgc2Nyb2xsQmFyV2lkdGggPSBnZXRTY3JvbGxCYXJXaWR0aCgpLFxuICAgICAgICBjc3NQcm9wcyxcbiAgICAgICAgY3NzU3RyLFxuICAgICAgICB4O1xuXG4gICAgLy8gZGVmaW5lIHNjcm9sbCBsb2NrIGNsYXNzIGR5bmFtaWNhbGx5XG4gICAgY3NzUHJvcHMgPSBbJ292ZXJmbG93OmhpZGRlbiddO1xuXG4gICAgaWYgKHNjcm9sbEJhcldpZHRoKSB7XG4gICAgICAvLyBzY3JvbGxiYXIteVxuICAgICAgaWYgKGh0bWxFbC5zY3JvbGxIZWlnaHQgPiBodG1sRWwuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgIHggPSBwYXJzZUludChqcUxpdGUuY3NzKGJvZHlFbCwgJ3BhZGRpbmctcmlnaHQnKSkgKyBzY3JvbGxCYXJXaWR0aDtcbiAgICAgICAgY3NzUHJvcHMucHVzaCgncGFkZGluZy1yaWdodDonICsgeCArICdweCcpO1xuICAgICAgfVxuICAgIFxuICAgICAgLy8gc2Nyb2xsYmFyLXhcbiAgICAgIGlmIChodG1sRWwuc2Nyb2xsV2lkdGggPiBodG1sRWwuY2xpZW50V2lkdGgpIHtcbiAgICAgICAgeCA9IHBhcnNlSW50KGpxTGl0ZS5jc3MoYm9keUVsLCAncGFkZGluZy1ib3R0b20nKSkgKyBzY3JvbGxCYXJXaWR0aDtcbiAgICAgICAgY3NzUHJvcHMucHVzaCgncGFkZGluZy1ib3R0b206JyArIHggKyAncHgnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBkZWZpbmUgY3NzIGNsYXNzIGR5bmFtaWNhbGx5XG4gICAgY3NzU3RyID0gJy4nICsgc2Nyb2xsTG9ja0NscyArICd7JztcbiAgICBjc3NTdHIgKz0gY3NzUHJvcHMuam9pbignICFpbXBvcnRhbnQ7JykgKyAnICFpbXBvcnRhbnQ7fSc7XG4gICAgc2Nyb2xsU3R5bGVFbCA9IGxvYWRTdHlsZUZuKGNzc1N0cik7XG5cbiAgICAvLyBjYW5jZWwgJ3Njcm9sbCcgZXZlbnQgbGlzdGVuZXIgY2FsbGJhY2tzXG4gICAganFMaXRlLm9uKHdpbiwgJ3Njcm9sbCcsIHNjcm9sbEV2ZW50SGFuZGxlciwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgc2Nyb2xsIGxvY2tcbiAgICBzY3JvbGxMb2NrUG9zID0ge2xlZnQ6IGpxTGl0ZS5zY3JvbGxMZWZ0KHdpbiksIHRvcDoganFMaXRlLnNjcm9sbFRvcCh3aW4pfTtcbiAgICBqcUxpdGUuYWRkQ2xhc3MoYm9keUVsLCBzY3JvbGxMb2NrQ2xzKTtcbiAgfVxufVxuXG5cbi8qKlxuICogVHVybiBvZmYgd2luZG93IHNjcm9sbCBsb2NrLlxuICogQHBhcmFtIHtCb29sZWFufSByZXNldFBvcyAtIFJlc2V0IHNjcm9sbCBwb3NpdGlvbiB0byBvcmlnaW5hbCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZGlzYWJsZVNjcm9sbExvY2tGbihyZXNldFBvcykge1xuICAvLyBpZ25vcmVcbiAgaWYgKHNjcm9sbExvY2sgPT09IDApIHJldHVybjtcblxuICAvLyBkZWNyZW1lbnQgY291bnRlclxuICBzY3JvbGxMb2NrIC09IDE7XG5cbiAgLy8gcmVtb3ZlIGxvY2sgXG4gIGlmIChzY3JvbGxMb2NrID09PSAwKSB7XG4gICAgLy8gcmVtb3ZlIHNjcm9sbCBsb2NrIGFuZCBkZWxldGUgc3R5bGUgZWxlbWVudFxuICAgIGpxTGl0ZS5yZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzY3JvbGxMb2NrQ2xzKTtcblxuICAgIC8vIHJlc3RvcmUgc2Nyb2xsIHBvc2l0aW9uXG4gICAgaWYgKHJlc2V0UG9zKSB3aW5kb3cuc2Nyb2xsVG8oc2Nyb2xsTG9ja1Bvcy5sZWZ0LCBzY3JvbGxMb2NrUG9zLnRvcCk7XG5cbiAgICAvLyByZXN0b3JlIHNjcm9sbCBldmVudCBsaXN0ZW5lcnNcbiAgICBqcUxpdGUub2ZmKHdpbmRvdywgJ3Njcm9sbCcsIHNjcm9sbEV2ZW50SGFuZGxlciwgdHJ1ZSk7XG5cbiAgICAvLyBkZWxldGUgc3R5bGUgZWxlbWVudCAoZGVmZXJyZWQgZm9yIEZpcmVmb3ggUXVhbnR1bSBidWdmaXgpXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNjcm9sbFN0eWxlRWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JvbGxTdHlsZUVsKTsgICAgICBcbiAgICB9LCAwKTtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybiBzY3JvbGwgYmFyIHdpZHRoLlxuICovXG52YXIgZ2V0U2Nyb2xsQmFyV2lkdGggPSBmdW5jdGlvbigpIHtcbiAgLy8gY2hlY2sgY2FjaGVcbiAgaWYgKF9zY3JvbGxCYXJXaWR0aCAhPT0gdW5kZWZpbmVkKSByZXR1cm4gX3Njcm9sbEJhcldpZHRoO1xuICBcbiAgLy8gY2FsY3VsYXRlIHNjcm9sbCBiYXIgd2lkdGhcbiAgdmFyIGRvYyA9IGRvY3VtZW50LFxuICAgICAgYm9keUVsID0gZG9jLmJvZHksXG4gICAgICBlbCA9IGRvYy5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBlbC5pbm5lckhUTUwgPSAnPGRpdiBzdHlsZT1cIndpZHRoOjUwcHg7aGVpZ2h0OjUwcHg7cG9zaXRpb246YWJzb2x1dGU7JyArIFxuICAgICdsZWZ0Oi01MHB4O3RvcDotNTBweDtvdmVyZmxvdzphdXRvO1wiPjxkaXYgc3R5bGU9XCJ3aWR0aDoxcHg7JyArIFxuICAgICdoZWlnaHQ6MTAwcHg7XCI+PC9kaXY+PC9kaXY+JztcbiAgZWwgPSBlbC5maXJzdENoaWxkO1xuICBib2R5RWwuYXBwZW5kQ2hpbGQoZWwpO1xuICBfc2Nyb2xsQmFyV2lkdGggPSBlbC5vZmZzZXRXaWR0aCAtIGVsLmNsaWVudFdpZHRoO1xuICBib2R5RWwucmVtb3ZlQ2hpbGQoZWwpO1xuXG4gIHJldHVybiBfc2Nyb2xsQmFyV2lkdGg7XG59XG5cblxuLyoqXG4gKiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxlZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lRm4oY2FsbGJhY2spIHtcbiAgdmFyIGZuID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgaWYgKGZuKSBmbihjYWxsYmFjayk7XG4gIGVsc2Ugc2V0VGltZW91dChjYWxsYmFjaywgMCk7XG59XG5cblxuLyoqXG4gKiBEZWZpbmUgdGhlIG1vZHVsZSBBUElcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8qKiBDcmVhdGUgY2FsbGJhY2sgY2xvc3VyZXMgKi9cbiAgY2FsbGJhY2s6IGNhbGxiYWNrRm4sXG4gIFxuICAvKiogQ2xhc3NuYW1lcyBvYmplY3QgdG8gc3RyaW5nICovXG4gIGNsYXNzTmFtZXM6IGNsYXNzTmFtZXNGbixcblxuICAvKiogRGlzYWJsZSBzY3JvbGwgbG9jayAqL1xuICBkaXNhYmxlU2Nyb2xsTG9jazogZGlzYWJsZVNjcm9sbExvY2tGbixcblxuICAvKiogRGlzcGF0Y2ggZXZlbnQgKi9cbiAgZGlzcGF0Y2hFdmVudDogZGlzcGF0Y2hFdmVudEZuLFxuICBcbiAgLyoqIEVuYWJsZSBzY3JvbGwgbG9jayAqL1xuICBlbmFibGVTY3JvbGxMb2NrOiBlbmFibGVTY3JvbGxMb2NrRm4sXG5cbiAgLyoqIExvZyBtZXNzYWdlcyB0byB0aGUgY29uc29sZSB3aGVuIGRlYnVnIGlzIHR1cm5lZCBvbiAqL1xuICBsb2c6IGxvZ0ZuLFxuXG4gIC8qKiBMb2FkIENTUyB0ZXh0IGFzIG5ldyBzdHlsZXNoZWV0ICovXG4gIGxvYWRTdHlsZTogbG9hZFN0eWxlRm4sXG5cbiAgLyoqIFJhaXNlIE1VSSBlcnJvciAqL1xuICByYWlzZUVycm9yOiByYWlzZUVycm9yRm4sXG5cbiAgLyoqIFJlcXVlc3QgYW5pbWF0aW9uIGZyYW1lICovXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZTogcmVxdWVzdEFuaW1hdGlvbkZyYW1lRm4sXG5cbiAgLyoqIFN1cHBvcnQgUG9pbnRlciBFdmVudHMgY2hlY2sgKi9cbiAgc3VwcG9ydHNQb2ludGVyRXZlbnRzOiBzdXBwb3J0c1BvaW50ZXJFdmVudHNGblxufTtcbiJdfQ==
},{"../config":2,"./jqLite":4}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = window.angular;

var _angular2 = babelHelpers.interopRequireDefault(_angular);

var moduleName = 'mui.appbar'; /**
                                * MUI Angular Appbar Component
                                * @module angular/appbar
                                */

_angular2.default.module(moduleName, []).directive('muiAppbar', function () {
  return {
    restrict: 'AE',
    transclude: true,
    replace: true,
    template: '<div class="mui-appbar"></div>',
    link: function link(scope, element, attrs, controller, transcludeFn) {
      // use transcludeFn to pass ng-controller on parent element
      transcludeFn(scope, function (clone) {
        element.append(clone);
      });
    }
  };
});

/** Define module API */
exports.default = moduleName;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGJhci5qcyJdLCJuYW1lcyI6WyJtb2R1bGVOYW1lIiwibW9kdWxlIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJ0cmFuc2NsdWRlIiwicmVwbGFjZSIsInRlbXBsYXRlIiwibGluayIsInNjb3BlIiwiZWxlbWVudCIsImF0dHJzIiwiY29udHJvbGxlciIsInRyYW5zY2x1ZGVGbiIsImNsb25lIiwiYXBwZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQTs7OztBQUdBLElBQU1BLGFBQWEsWUFBbkIsQyxDQVJBOzs7OztBQVdBLGtCQUFRQyxNQUFSLENBQWVELFVBQWYsRUFBMkIsRUFBM0IsRUFDR0UsU0FESCxDQUNhLFdBRGIsRUFDMEIsWUFBVztBQUNqQyxTQUFPO0FBQ0xDLGNBQVUsSUFETDtBQUVMQyxnQkFBWSxJQUZQO0FBR0xDLGFBQVMsSUFISjtBQUlMQyxjQUFVLGdDQUpMO0FBS0xDLFVBQU0sY0FBU0MsS0FBVCxFQUFnQkMsT0FBaEIsRUFBeUJDLEtBQXpCLEVBQWdDQyxVQUFoQyxFQUE0Q0MsWUFBNUMsRUFBMEQ7QUFDOUQ7QUFDQUEsbUJBQWFKLEtBQWIsRUFBb0IsVUFBU0ssS0FBVCxFQUFnQjtBQUNsQ0osZ0JBQVFLLE1BQVIsQ0FBZUQsS0FBZjtBQUNELE9BRkQ7QUFHRDtBQVZJLEdBQVA7QUFZRCxDQWRIOztBQWlCQTtrQkFDZWIsVSIsImZpbGUiOiJhcHBiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1VSSBBbmd1bGFyIEFwcGJhciBDb21wb25lbnRcbiAqIEBtb2R1bGUgYW5ndWxhci9hcHBiYXJcbiAqL1xuXG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcblxuXG5jb25zdCBtb2R1bGVOYW1lID0gJ211aS5hcHBiYXInO1xuXG5cbmFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUsIFtdKVxuICAuZGlyZWN0aXZlKCdtdWlBcHBiYXInLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cIm11aS1hcHBiYXJcIj48L2Rpdj4nLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjb250cm9sbGVyLCB0cmFuc2NsdWRlRm4pIHtcbiAgICAgICAgLy8gdXNlIHRyYW5zY2x1ZGVGbiB0byBwYXNzIG5nLWNvbnRyb2xsZXIgb24gcGFyZW50IGVsZW1lbnRcbiAgICAgICAgdHJhbnNjbHVkZUZuKHNjb3BlLCBmdW5jdGlvbihjbG9uZSkge1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG5cblxuLyoqIERlZmluZSBtb2R1bGUgQVBJICovXG5leHBvcnQgZGVmYXVsdCBtb2R1bGVOYW1lO1xuIl19
},{"angular":"aeQg5j"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = window.angular;

var _angular2 = babelHelpers.interopRequireDefault(_angular);

var _jqLite = require('../js/lib/jqLite');

var jqLite = babelHelpers.interopRequireWildcard(_jqLite);

var _util = require('../js/lib/util');

var util = babelHelpers.interopRequireWildcard(_util);


var moduleName = 'mui.button',
    supportsTouch = 'ontouchstart' in document.documentElement,
    mouseDownEvents = supportsTouch ? 'touchstart' : 'mousedown',
    mouseUpEvents = supportsTouch ? 'touchend' : 'mouseup mouseleave'; /**
                                                                        * MUI Angular Button Component
                                                                        * @module angular/button
                                                                        */

_angular2.default.module(moduleName, []).directive('muiButton', function () {
  return {
    restrict: 'AE',
    replace: true,
    template: '<button class="mui-btn" mui-ripple>' + '<ng-transclude></ng-transclude>' + '<span class="mui-btn__ripple-container">' + '<span class="mui-ripple"></span>' + '</span>' + '</button>',
    transclude: true,
    link: function link(scope, element, attrs) {
      var isUndef = _angular2.default.isUndefined,
          el = element[0];

      // disable MUI js
      el._muiDropdown = true;
      el._muiRipple = true;

      // handle disabled attribute
      if (!isUndef(attrs.disabled) && isUndef(attrs.ngDisabled)) {
        element.prop('disabled', true);
      }

      // set button styles        
      _angular2.default.forEach(['variant', 'color', 'size'], function (attrName) {
        var attrVal = attrs[attrName];
        if (attrVal) element.addClass('mui-btn--' + attrVal);
      });
    }
  };
}).directive('muiRipple', ['$timeout', function ($timeout) {
  return {
    restrict: 'A',
    link: function link(scope, element, attrs) {
      var buttonEl = element[0];

      // cache reference to ripple element
      buttonEl._rippleEl = buttonEl.querySelector('.mui-ripple');

      // add mousedown and mouseup event ripple effect handlers
      element.on(mouseDownEvents, mouseDownHandler);
    }
  };
}]);

/**
 * MouseDown event handler.
 * @param {Event} ev - The DOM event
 */
function mouseDownHandler(ev) {
  var buttonEl = this,
      rippleEl = buttonEl._rippleEl;

  // exit if disabled
  if (buttonEl.disabled) return;

  // add mouseup handler on first-click
  if (!rippleEl._init) {
    jqLite.on(buttonEl, mouseUpEvents, mouseUpHandler);
    rippleEl._init = true;
  }

  // get (x, y) position of click
  var offset = jqLite.offset(buttonEl),
      clickEv = ev.type === 'touchstart' ? ev.touches[0] : ev,
      radius,
      diameter;

  // calculate radius
  radius = Math.sqrt(offset.width * offset.width + offset.height * offset.height);

  diameter = radius * 2 + 'px';

  // set position and dimensions
  jqLite.css(rippleEl, {
    width: diameter,
    height: diameter,
    top: Math.round(clickEv.pageY - offset.top - radius) + 'px',
    left: Math.round(clickEv.pageX - offset.left - radius) + 'px'
  });

  jqLite.removeClass(rippleEl, 'mui--is-animating');
  jqLite.addClass(rippleEl, 'mui--is-visible');

  // start animation
  util.requestAnimationFrame(function () {
    jqLite.addClass(rippleEl, 'mui--is-animating');
  });
}

/**
 * MouseUp event handler.
 * @param {Event} ev - The DOM event
 */
function mouseUpHandler(ev) {
  // get ripple element
  var rippleEl = this._rippleEl;

  // allow a repaint to occur before removing class so animation shows for
  // tap events
  util.requestAnimationFrame(function () {
    jqLite.removeClass(rippleEl, 'mui--is-visible');
  });
}

/** Define module API */
exports.default = moduleName;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJqcUxpdGUiLCJ1dGlsIiwibW9kdWxlTmFtZSIsInN1cHBvcnRzVG91Y2giLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsIm1vdXNlRG93bkV2ZW50cyIsIm1vdXNlVXBFdmVudHMiLCJtb2R1bGUiLCJkaXJlY3RpdmUiLCJyZXN0cmljdCIsInJlcGxhY2UiLCJ0ZW1wbGF0ZSIsInRyYW5zY2x1ZGUiLCJsaW5rIiwic2NvcGUiLCJlbGVtZW50IiwiYXR0cnMiLCJpc1VuZGVmIiwiaXNVbmRlZmluZWQiLCJlbCIsIl9tdWlEcm9wZG93biIsIl9tdWlSaXBwbGUiLCJkaXNhYmxlZCIsIm5nRGlzYWJsZWQiLCJwcm9wIiwiZm9yRWFjaCIsImF0dHJOYW1lIiwiYXR0clZhbCIsImFkZENsYXNzIiwiJHRpbWVvdXQiLCJidXR0b25FbCIsIl9yaXBwbGVFbCIsInF1ZXJ5U2VsZWN0b3IiLCJvbiIsIm1vdXNlRG93bkhhbmRsZXIiLCJldiIsInJpcHBsZUVsIiwiX2luaXQiLCJtb3VzZVVwSGFuZGxlciIsIm9mZnNldCIsImNsaWNrRXYiLCJ0eXBlIiwidG91Y2hlcyIsInJhZGl1cyIsImRpYW1ldGVyIiwiTWF0aCIsInNxcnQiLCJ3aWR0aCIsImhlaWdodCIsImNzcyIsInRvcCIsInJvdW5kIiwicGFnZVkiLCJsZWZ0IiwicGFnZVgiLCJyZW1vdmVDbGFzcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0E7Ozs7QUFFQTs7SUFBWUEsTTs7QUFDWjs7SUFBWUMsSTs7O0FBR1osSUFBTUMsYUFBYSxZQUFuQjtBQUFBLElBQ01DLGdCQUFnQixrQkFBa0JDLFNBQVNDLGVBRGpEO0FBQUEsSUFFTUMsa0JBQW1CSCxhQUFELEdBQWtCLFlBQWxCLEdBQWlDLFdBRnpEO0FBQUEsSUFHTUksZ0JBQWlCSixhQUFELEdBQWtCLFVBQWxCLEdBQStCLG9CQUhyRCxDLENBWEE7Ozs7O0FBaUJBLGtC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QUFRYyxLQUFSLEdBQWdCZixPQUFPYyxJQUF2QixHQUE4QlYsTUFBekMsSUFBbUQ7QUFKdEMsR0FBckI7O0FBT0E1QyxTQUFPd0QsV0FBUCxDQUFtQm5CLFFBQW5CLEVBQTZCLG1CQUE3QjtBQUNBckMsU0FBTzZCLFFBQVAsQ0FBZ0JRLFFBQWhCLEVBQTBCLGlCQUExQjs7QUFFQTtBQUNBcEMsT0FBS3dELHFCQUFMLENBQTJCLFlBQVc7QUFDcEN6RCxXQUFPNkIsUUFBUCxDQUFnQlEsUUFBaEIsRUFBMEIsbUJBQTFCO0FBQ0QsR0FGRDtBQUdEOztBQUdEOzs7O0FBSUEsU0FBU0UsY0FBVCxDQUF3QkgsRUFBeEIsRUFBNEI7QUFDMUI7QUFDQSxNQUFJQyxXQUFXLEtBQUtMLFNBQXBCOztBQUVBO0FBQ0E7QUFDQS9CLE9BQUt3RCxxQkFBTCxDQUEyQixZQUFXO0FBQ3BDekQsV0FBT3dELFdBQVAsQ0FBbUJuQixRQUFuQixFQUE2QixpQkFBN0I7QUFDRCxHQUZEO0FBR0Q7O0FBR0Q7a0JBQ2VuQyxVIiwiZmlsZSI6ImJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTVVJIEFuZ3VsYXIgQnV0dG9uIENvbXBvbmVudFxuICogQG1vZHVsZSBhbmd1bGFyL2J1dHRvblxuICovXG5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuXG5pbXBvcnQgKiBhcyBqcUxpdGUgZnJvbSAnLi4vanMvbGliL2pxTGl0ZSc7XG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gJy4uL2pzL2xpYi91dGlsJztcblxuXG5jb25zdCBtb2R1bGVOYW1lID0gJ211aS5idXR0b24nLFxuICAgICAgc3VwcG9ydHNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcbiAgICAgIG1vdXNlRG93bkV2ZW50cyA9IChzdXBwb3J0c1RvdWNoKSA/ICd0b3VjaHN0YXJ0JyA6ICdtb3VzZWRvd24nLFxuICAgICAgbW91c2VVcEV2ZW50cyA9IChzdXBwb3J0c1RvdWNoKSA/ICd0b3VjaGVuZCcgOiAnbW91c2V1cCBtb3VzZWxlYXZlJztcblxuXG5hbmd1bGFyLm1vZHVsZShtb2R1bGVOYW1lLCBbXSlcbiAgLmRpcmVjdGl2ZSgnbXVpQnV0dG9uJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlOiAnPGJ1dHRvbiBjbGFzcz1cIm11aS1idG5cIiBtdWktcmlwcGxlPicgK1xuICAgICAgICAnPG5nLXRyYW5zY2x1ZGU+PC9uZy10cmFuc2NsdWRlPicgK1xuICAgICAgICAnPHNwYW4gY2xhc3M9XCJtdWktYnRuX19yaXBwbGUtY29udGFpbmVyXCI+JyArIFxuICAgICAgICAnPHNwYW4gY2xhc3M9XCJtdWktcmlwcGxlXCI+PC9zcGFuPicgK1xuICAgICAgICAnPC9zcGFuPicgK1xuICAgICAgICAnPC9idXR0b24+JyxcbiAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgdmFyIGlzVW5kZWYgPSBhbmd1bGFyLmlzVW5kZWZpbmVkLFxuICAgICAgICAgICAgZWwgPSBlbGVtZW50WzBdO1xuXG4gICAgICAgIC8vIGRpc2FibGUgTVVJIGpzXG4gICAgICAgIGVsLl9tdWlEcm9wZG93biA9IHRydWU7XG4gICAgICAgIGVsLl9tdWlSaXBwbGUgPSB0cnVlO1xuXG4gICAgICAgIC8vIGhhbmRsZSBkaXNhYmxlZCBhdHRyaWJ1dGVcbiAgICAgICAgaWYgKCFpc1VuZGVmKGF0dHJzLmRpc2FibGVkKSAmJiBpc1VuZGVmKGF0dHJzLm5nRGlzYWJsZWQpKSB7XG4gICAgICAgICAgZWxlbWVudC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2V0IGJ1dHRvbiBzdHlsZXMgICAgICAgIFxuICAgICAgICBhbmd1bGFyLmZvckVhY2goWyd2YXJpYW50JywgJ2NvbG9yJywgJ3NpemUnXSwgZnVuY3Rpb24oYXR0ck5hbWUpIHtcbiAgICAgICAgICB2YXIgYXR0clZhbCA9IGF0dHJzW2F0dHJOYW1lXTtcbiAgICAgICAgICBpZiAoYXR0clZhbCkgZWxlbWVudC5hZGRDbGFzcygnbXVpLWJ0bi0tJyArIGF0dHJWYWwpO1xuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgIH07XG4gIH0pXG4gIC5kaXJlY3RpdmUoJ211aVJpcHBsZScsIFsnJHRpbWVvdXQnLCBmdW5jdGlvbigkdGltZW91dCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIHZhciBidXR0b25FbCA9IGVsZW1lbnRbMF07XG5cbiAgICAgICAgLy8gY2FjaGUgcmVmZXJlbmNlIHRvIHJpcHBsZSBlbGVtZW50XG4gICAgICAgIGJ1dHRvbkVsLl9yaXBwbGVFbCA9IGJ1dHRvbkVsLnF1ZXJ5U2VsZWN0b3IoJy5tdWktcmlwcGxlJyk7XG5cbiAgICAgICAgLy8gYWRkIG1vdXNlZG93biBhbmQgbW91c2V1cCBldmVudCByaXBwbGUgZWZmZWN0IGhhbmRsZXJzXG4gICAgICAgIGVsZW1lbnQub24obW91c2VEb3duRXZlbnRzLCBtb3VzZURvd25IYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuXG4vKipcbiAqIE1vdXNlRG93biBldmVudCBoYW5kbGVyLlxuICogQHBhcmFtIHtFdmVudH0gZXYgLSBUaGUgRE9NIGV2ZW50XG4gKi9cbmZ1bmN0aW9uIG1vdXNlRG93bkhhbmRsZXIoZXYpIHtcbiAgdmFyIGJ1dHRvbkVsID0gdGhpcyxcbiAgICAgIHJpcHBsZUVsID0gYnV0dG9uRWwuX3JpcHBsZUVsO1xuXG4gIC8vIGV4aXQgaWYgZGlzYWJsZWRcbiAgaWYgKGJ1dHRvbkVsLmRpc2FibGVkKSByZXR1cm47XG5cbiAgLy8gYWRkIG1vdXNldXAgaGFuZGxlciBvbiBmaXJzdC1jbGlja1xuICBpZiAoIXJpcHBsZUVsLl9pbml0KSB7XG4gICAganFMaXRlLm9uKGJ1dHRvbkVsLCBtb3VzZVVwRXZlbnRzLCBtb3VzZVVwSGFuZGxlcik7XG4gICAgcmlwcGxlRWwuX2luaXQgPSB0cnVlO1xuICB9XG4gIFxuICAvLyBnZXQgKHgsIHkpIHBvc2l0aW9uIG9mIGNsaWNrXG4gIHZhciBvZmZzZXQgPSBqcUxpdGUub2Zmc2V0KGJ1dHRvbkVsKSxcbiAgICAgIGNsaWNrRXYgPSAoZXYudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSA/IGV2LnRvdWNoZXNbMF0gOiBldixcbiAgICAgIHJhZGl1cyxcbiAgICAgIGRpYW1ldGVyO1xuXG4gIC8vIGNhbGN1bGF0ZSByYWRpdXNcbiAgcmFkaXVzID0gTWF0aC5zcXJ0KG9mZnNldC53aWR0aCAqIG9mZnNldC53aWR0aCArXG4gICAgICAgICAgICAgICAgICAgICBvZmZzZXQuaGVpZ2h0ICogb2Zmc2V0LmhlaWdodCk7XG4gIFxuICBkaWFtZXRlciA9IHJhZGl1cyAqIDIgKyAncHgnO1xuXG4gIC8vIHNldCBwb3NpdGlvbiBhbmQgZGltZW5zaW9uc1xuICBqcUxpdGUuY3NzKHJpcHBsZUVsLCB7XG4gICAgd2lkdGg6IGRpYW1ldGVyLFxuICAgIGhlaWdodDogZGlhbWV0ZXIsXG4gICAgdG9wOiBNYXRoLnJvdW5kKGNsaWNrRXYucGFnZVkgLSBvZmZzZXQudG9wIC0gcmFkaXVzKSArICdweCcsXG4gICAgbGVmdDogTWF0aC5yb3VuZChjbGlja0V2LnBhZ2VYIC0gb2Zmc2V0LmxlZnQgLSByYWRpdXMpICsgJ3B4J1xuICB9KTtcblxuICBqcUxpdGUucmVtb3ZlQ2xhc3MocmlwcGxlRWwsICdtdWktLWlzLWFuaW1hdGluZycpO1xuICBqcUxpdGUuYWRkQ2xhc3MocmlwcGxlRWwsICdtdWktLWlzLXZpc2libGUnKTtcbiAgXG4gIC8vIHN0YXJ0IGFuaW1hdGlvblxuICB1dGlsLnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICBqcUxpdGUuYWRkQ2xhc3MocmlwcGxlRWwsICdtdWktLWlzLWFuaW1hdGluZycpO1xuICB9KTtcbn1cblxuXG4vKipcbiAqIE1vdXNlVXAgZXZlbnQgaGFuZGxlci5cbiAqIEBwYXJhbSB7RXZlbnR9IGV2IC0gVGhlIERPTSBldmVudFxuICovXG5mdW5jdGlvbiBtb3VzZVVwSGFuZGxlcihldikge1xuICAvLyBnZXQgcmlwcGxlIGVsZW1lbnRcbiAgdmFyIHJpcHBsZUVsID0gdGhpcy5fcmlwcGxlRWw7XG5cbiAgLy8gYWxsb3cgYSByZXBhaW50IHRvIG9jY3VyIGJlZm9yZSByZW1vdmluZyBjbGFzcyBzbyBhbmltYXRpb24gc2hvd3MgZm9yXG4gIC8vIHRhcCBldmVudHNcbiAgdXRpbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAganFMaXRlLnJlbW92ZUNsYXNzKHJpcHBsZUVsLCAnbXVpLS1pcy12aXNpYmxlJyk7XG4gIH0pO1xufVxuXG5cbi8qKiBEZWZpbmUgbW9kdWxlIEFQSSAqL1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlTmFtZTtcbiJdfQ==
},{"../js/lib/jqLite":4,"../js/lib/util":5,"angular":"aeQg5j"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = window.angular;

var _angular2 = babelHelpers.interopRequireDefault(_angular);

var moduleName = 'mui.caret'; /**
                               * MUI Angular Caret Component
                               * @module angular/caret
                               */

_angular2.default.module(moduleName, []).directive('muiCaret', function () {
  return {
    restrict: 'AE',
    replace: true,
    template: '<span class="mui-caret"></span>'
  };
});

/** Define module API */
exports.default = moduleName;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmV0LmpzIl0sIm5hbWVzIjpbIm1vZHVsZU5hbWUiLCJtb2R1bGUiLCJkaXJlY3RpdmUiLCJyZXN0cmljdCIsInJlcGxhY2UiLCJ0ZW1wbGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0E7Ozs7QUFHQSxJQUFNQSxhQUFhLFdBQW5CLEMsQ0FSQTs7Ozs7QUFXQSxrQkFBUUMsTUFBUixDQUFlRCxVQUFmLEVBQTJCLEVBQTNCLEVBQ0dFLFNBREgsQ0FDYSxVQURiLEVBQ3lCLFlBQVc7QUFDaEMsU0FBTztBQUNMQyxjQUFXLElBRE47QUFFTEMsYUFBUyxJQUZKO0FBR0xDLGNBQVc7QUFITixHQUFQO0FBS0QsQ0FQSDs7QUFVQTtrQkFDZUwsVSIsImZpbGUiOiJjYXJldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTVVJIEFuZ3VsYXIgQ2FyZXQgQ29tcG9uZW50XG4gKiBAbW9kdWxlIGFuZ3VsYXIvY2FyZXRcbiAqL1xuXG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcblxuXG5jb25zdCBtb2R1bGVOYW1lID0gJ211aS5jYXJldCc7XG5cblxuYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSwgW10pXG4gIC5kaXJlY3RpdmUoJ211aUNhcmV0JywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0IDogJ0FFJyxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICB0ZW1wbGF0ZSA6ICc8c3BhbiBjbGFzcz1cIm11aS1jYXJldFwiPjwvc3Bhbj4nXG4gICAgfTtcbiAgfSk7XG5cblxuLyoqIERlZmluZSBtb2R1bGUgQVBJICovXG5leHBvcnQgZGVmYXVsdCBtb2R1bGVOYW1lO1xuIl19
},{"angular":"aeQg5j"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = window.angular;

var _angular2 = babelHelpers.interopRequireDefault(_angular);

var moduleName = 'mui.checkbox'; /**
                                  * MUI Angular Checkbox Component
                                  * @module angular/checkox
                                  */

_angular2.default.module(moduleName, []).directive('muiCheckbox', ['$parse', function () {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      label: '@',
      name: '@',
      value: '@',
      ngChecked: '=',
      ngDisabled: '=',
      ngModel: '='
    },
    template: function template(tElement, tAttrs) {
      var isUndef = _angular2.default.isUndefined,
          html = '';

      html += '<div class="mui-checkbox"><label><input type="checkbox" ';

      // input attributes
      html += 'name={{name}} ';
      html += 'value={{value}} ';
      html += 'ng-disabled="ngDisabled" ';

      // handle ngChecked and ngModel
      if (!isUndef(tAttrs.ngChecked)) html += 'ng-checked="ngChecked" ';
      if (!isUndef(tAttrs.ngModel)) html += 'ng-model="ngModel" ';

      html += '>{{label}}</label></div>';

      return html;
    }
  };
}]);

/** Define module API */
exports.default = moduleName;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94LmpzIl0sIm5hbWVzIjpbIm1vZHVsZU5hbWUiLCJtb2R1bGUiLCJkaXJlY3RpdmUiLCJyZXN0cmljdCIsInJlcGxhY2UiLCJzY29wZSIsImxhYmVsIiwibmFtZSIsInZhbHVlIiwibmdDaGVja2VkIiwibmdEaXNhYmxlZCIsIm5nTW9kZWwiLCJ0ZW1wbGF0ZSIsInRFbGVtZW50IiwidEF0dHJzIiwiaXNVbmRlZiIsImlzVW5kZWZpbmVkIiwiaHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0E7Ozs7QUFHQSxJQUFNQSxhQUFhLGNBQW5CLEMsQ0FSQTs7Ozs7QUFXQSxrQkFBUUMsTUFBUixDQUFlRCxVQUFmLEVBQTJCLEVBQTNCLEVBQ0dFLFNBREgsQ0FDYSxhQURiLEVBQzRCLENBQUMsUUFBRCxFQUFXLFlBQVc7QUFDOUMsU0FBTztBQUNMQyxjQUFVLElBREw7QUFFTEMsYUFBUyxJQUZKO0FBR0xDLFdBQU87QUFDTEMsYUFBTyxHQURGO0FBRUxDLFlBQU0sR0FGRDtBQUdMQyxhQUFPLEdBSEY7QUFJTEMsaUJBQVcsR0FKTjtBQUtMQyxrQkFBWSxHQUxQO0FBTUxDLGVBQVM7QUFOSixLQUhGO0FBV0xDLGNBQVUsa0JBQVNDLFFBQVQsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQ25DLFVBQUlDLFVBQVUsa0JBQVFDLFdBQXRCO0FBQUEsVUFDSUMsT0FBTyxFQURYOztBQUdBQSxjQUFRLDBEQUFSOztBQUVBO0FBQ0FBLGNBQVEsZ0JBQVI7QUFDQUEsY0FBUSxrQkFBUjtBQUNBQSxjQUFRLDJCQUFSOztBQUVBO0FBQ0EsVUFBSSxDQUFDRixRQUFRRCxPQUFPTCxTQUFmLENBQUwsRUFBZ0NRLFFBQVEseUJBQVI7QUFDaEMsVUFBSSxDQUFDRixRQUFRRCxPQUFPSCxPQUFmLENBQUwsRUFBOEJNLFFBQVEscUJBQVI7O0FBRTlCQSxjQUFRLDBCQUFSOztBQUVBLGFBQU9BLElBQVA7QUFDRDtBQTdCSSxHQUFQO0FBK0JELENBaEN5QixDQUQ1Qjs7QUFvQ0E7a0JBQ2VqQixVIiwiZmlsZSI6ImNoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNVUkgQW5ndWxhciBDaGVja2JveCBDb21wb25lbnRcbiAqIEBtb2R1bGUgYW5ndWxhci9jaGVja294XG4gKi9cblxuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5cblxuY29uc3QgbW9kdWxlTmFtZSA9ICdtdWkuY2hlY2tib3gnO1xuXG5cbmFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUsIFtdKVxuICAuZGlyZWN0aXZlKCdtdWlDaGVja2JveCcsIFsnJHBhcnNlJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIGxhYmVsOiAnQCcsXG4gICAgICAgIG5hbWU6ICdAJyxcbiAgICAgICAgdmFsdWU6ICdAJyxcbiAgICAgICAgbmdDaGVja2VkOiAnPScsXG4gICAgICAgIG5nRGlzYWJsZWQ6ICc9JyxcbiAgICAgICAgbmdNb2RlbDogJz0nXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGU6IGZ1bmN0aW9uKHRFbGVtZW50LCB0QXR0cnMpIHtcbiAgICAgICAgdmFyIGlzVW5kZWYgPSBhbmd1bGFyLmlzVW5kZWZpbmVkLFxuICAgICAgICAgICAgaHRtbCA9ICcnO1xuXG4gICAgICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJtdWktY2hlY2tib3hcIj48bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiICc7XG5cbiAgICAgICAgLy8gaW5wdXQgYXR0cmlidXRlc1xuICAgICAgICBodG1sICs9ICduYW1lPXt7bmFtZX19ICc7XG4gICAgICAgIGh0bWwgKz0gJ3ZhbHVlPXt7dmFsdWV9fSAnO1xuICAgICAgICBodG1sICs9ICduZy1kaXNhYmxlZD1cIm5nRGlzYWJsZWRcIiAnO1xuXG4gICAgICAgIC8vIGhhbmRsZSBuZ0NoZWNrZWQgYW5kIG5nTW9kZWxcbiAgICAgICAgaWYgKCFpc1VuZGVmKHRBdHRycy5uZ0NoZWNrZWQpKSBodG1sICs9ICduZy1jaGVja2VkPVwibmdDaGVja2VkXCIgJztcbiAgICAgICAgaWYgKCFpc1VuZGVmKHRBdHRycy5uZ01vZGVsKSkgaHRtbCArPSAnbmctbW9kZWw9XCJuZ01vZGVsXCIgJztcblxuICAgICAgICBodG1sICs9ICc+e3tsYWJlbH19PC9sYWJlbD48L2Rpdj4nO1xuXG4gICAgICAgIHJldHVybiBodG1sO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG5cbi8qKiBEZWZpbmUgbW9kdWxlIEFQSSAqL1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlTmFtZTtcbiJdfQ==
},{"angular":"aeQg5j"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = window.angular;

var _angular2 = babelHelpers.interopRequireDefault(_angular);

var moduleName = 'mui.col'; /**
                             * MUI Angular Col (Grid) Component
                             * @module angular/col
                             */

_angular2.default.module(moduleName, []).directive('muiCol', function () {
  return {
    restrict: 'AE',
    scope: true,
    replace: true,
    template: '<div></div>',
    transclude: true,
    link: function link(scope, element, attrs, controller, transcludeFn) {
      // use transcludeFn to pass ng-controller on parent element
      transcludeFn(scope, function (clone) {
        element.append(clone);
      });

      // iterate through breakpoints
      var breakpoints = {
        'xs': 'mui-col-xs-',
        'sm': 'mui-col-sm-',
        'md': 'mui-col-md-',
        'lg': 'mui-col-lg-',
        'xl': 'mui-col-xl-',
        'xs-offset': 'mui-col-xs-offset-',
        'sm-offset': 'mui-col-sm-offset-',
        'md-offset': 'mui-col-md-offset-',
        'lg-offset': 'mui-col-lg-offset-',
        'xl-offset': 'mui-col-xl-offset-'
      };

      _angular2.default.forEach(breakpoints, function (value, key) {
        var attrVal = attrs[attrs.$normalize(key)];
        if (attrVal) element.addClass(value + attrVal);
      });
    }
  };
});

/** Define module API */
exports.default = moduleName;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbC5qcyJdLCJuYW1lcyI6WyJtb2R1bGVOYW1lIiwibW9kdWxlIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJzY29wZSIsInJlcGxhY2UiLCJ0ZW1wbGF0ZSIsInRyYW5zY2x1ZGUiLCJsaW5rIiwiZWxlbWVudCIsImF0dHJzIiwiY29udHJvbGxlciIsInRyYW5zY2x1ZGVGbiIsImNsb25lIiwiYXBwZW5kIiwiYnJlYWtwb2ludHMiLCJmb3JFYWNoIiwidmFsdWUiLCJrZXkiLCJhdHRyVmFsIiwiJG5vcm1hbGl6ZSIsImFkZENsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQTs7OztBQUdBLElBQU1BLGFBQWEsU0FBbkIsQyxDQVJBOzs7OztBQVdBLGtCQUFRQyxNQUFSLENBQWVELFVBQWYsRUFBMkIsRUFBM0IsRUFDR0UsU0FESCxDQUNhLFFBRGIsRUFDdUIsWUFBVztBQUM5QixTQUFPO0FBQ0xDLGNBQVUsSUFETDtBQUVMQyxXQUFPLElBRkY7QUFHTEMsYUFBUyxJQUhKO0FBSUxDLGNBQVUsYUFKTDtBQUtMQyxnQkFBWSxJQUxQO0FBTUxDLFVBQU0sY0FBU0osS0FBVCxFQUFnQkssT0FBaEIsRUFBeUJDLEtBQXpCLEVBQWdDQyxVQUFoQyxFQUE0Q0MsWUFBNUMsRUFBMEQ7QUFDOUQ7QUFDQUEsbUJBQWFSLEtBQWIsRUFBb0IsVUFBU1MsS0FBVCxFQUFnQjtBQUNsQ0osZ0JBQVFLLE1BQVIsQ0FBZUQsS0FBZjtBQUNELE9BRkQ7O0FBSUE7QUFDQSxVQUFJRSxjQUFjO0FBQ2hCLGNBQU0sYUFEVTtBQUVoQixjQUFNLGFBRlU7QUFHaEIsY0FBTSxhQUhVO0FBSWhCLGNBQU0sYUFKVTtBQUtoQixjQUFNLGFBTFU7QUFNaEIscUJBQWEsb0JBTkc7QUFPaEIscUJBQWEsb0JBUEc7QUFRaEIscUJBQWEsb0JBUkc7QUFTaEIscUJBQWEsb0JBVEc7QUFVaEIscUJBQWE7QUFWRyxPQUFsQjs7QUFhQSx3QkFBUUMsT0FBUixDQUFnQkQsV0FBaEIsRUFBNkIsVUFBU0UsS0FBVCxFQUFnQkMsR0FBaEIsRUFBcUI7QUFDaEQsWUFBSUMsVUFBVVQsTUFBTUEsTUFBTVUsVUFBTixDQUFpQkYsR0FBakIsQ0FBTixDQUFkO0FBQ0EsWUFBSUMsT0FBSixFQUFhVixRQUFRWSxRQUFSLENBQWlCSixRQUFRRSxPQUF6QjtBQUNkLE9BSEQ7QUFJRDtBQTlCSSxHQUFQO0FBZ0NELENBbENIOztBQXFDQTtrQkFDZW5CLFUiLCJmaWxlIjoiY29sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNVUkgQW5ndWxhciBDb2wgKEdyaWQpIENvbXBvbmVudFxuICogQG1vZHVsZSBhbmd1bGFyL2NvbFxuICovXG5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuXG5cbmNvbnN0IG1vZHVsZU5hbWUgPSAnbXVpLmNvbCc7XG5cblxuYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSwgW10pXG4gIC5kaXJlY3RpdmUoJ211aUNvbCcsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIHNjb3BlOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdj48L2Rpdj4nLFxuICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY29udHJvbGxlciwgdHJhbnNjbHVkZUZuKSB7XG4gICAgICAgIC8vIHVzZSB0cmFuc2NsdWRlRm4gdG8gcGFzcyBuZy1jb250cm9sbGVyIG9uIHBhcmVudCBlbGVtZW50XG4gICAgICAgIHRyYW5zY2x1ZGVGbihzY29wZSwgZnVuY3Rpb24oY2xvbmUpIHtcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZChjbG9uZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBicmVha3BvaW50c1xuICAgICAgICB2YXIgYnJlYWtwb2ludHMgPSB7XG4gICAgICAgICAgJ3hzJzogJ211aS1jb2wteHMtJyxcbiAgICAgICAgICAnc20nOiAnbXVpLWNvbC1zbS0nLFxuICAgICAgICAgICdtZCc6ICdtdWktY29sLW1kLScsXG4gICAgICAgICAgJ2xnJzogJ211aS1jb2wtbGctJyxcbiAgICAgICAgICAneGwnOiAnbXVpLWNvbC14bC0nLFxuICAgICAgICAgICd4cy1vZmZzZXQnOiAnbXVpLWNvbC14cy1vZmZzZXQtJyxcbiAgICAgICAgICAnc20tb2Zmc2V0JzogJ211aS1jb2wtc20tb2Zmc2V0LScsXG4gICAgICAgICAgJ21kLW9mZnNldCc6ICdtdWktY29sLW1kLW9mZnNldC0nLFxuICAgICAgICAgICdsZy1vZmZzZXQnOiAnbXVpLWNvbC1sZy1vZmZzZXQtJyxcbiAgICAgICAgICAneGwtb2Zmc2V0JzogJ211aS1jb2wteGwtb2Zmc2V0LSdcbiAgICAgICAgfTtcblxuICAgICAgICBhbmd1bGFyLmZvckVhY2goYnJlYWtwb2ludHMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICB2YXIgYXR0clZhbCA9IGF0dHJzW2F0dHJzLiRub3JtYWxpemUoa2V5KV07XG4gICAgICAgICAgaWYgKGF0dHJWYWwpIGVsZW1lbnQuYWRkQ2xhc3ModmFsdWUgKyBhdHRyVmFsKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG5cbi8qKiBEZWZpbmUgbW9kdWxlIEFQSSAqL1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlTmFtZTtcbiJdfQ==
},{"angular":"aeQg5j"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = window.angular;

var _angular2 = babelHelpers.interopRequireDefault(_angular);

var moduleName = 'mui.container'; /**
                                   * MUI Angular Container Component
                                   * @module angular/container
                                   */

_angular2.default.module(moduleName, []).directive('muiContainer', function () {
  return {
    restrict: 'AE',
    template: '<div class="mui-container"></div>',
    transclude: true,
    scope: true,
    replace: true,
    link: function link(scope, element, attrs, controller, transcludeFn) {
      // use transcludeFn to pass ng-controller on parent element
      transcludeFn(scope, function (clone) {
        element.append(clone);
      });

      // handle fluid containers
      if (!_angular2.default.isUndefined(attrs.fluid)) {
        element.removeClass('mui-container').addClass('mui-container-fluid');
      }
    }
  };
});

/** Define module API */
exports.default = moduleName;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJtb2R1bGVOYW1lIiwibW9kdWxlIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJ0ZW1wbGF0ZSIsInRyYW5zY2x1ZGUiLCJzY29wZSIsInJlcGxhY2UiLCJsaW5rIiwiZWxlbWVudCIsImF0dHJzIiwiY29udHJvbGxlciIsInRyYW5zY2x1ZGVGbiIsImNsb25lIiwiYXBwZW5kIiwiaXNVbmRlZmluZWQiLCJmbHVpZCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBOzs7O0FBR0EsSUFBTUEsYUFBYSxlQUFuQixDLENBUkE7Ozs7O0FBV0Esa0JBQVFDLE1BQVIsQ0FBZUQsVUFBZixFQUEyQixFQUEzQixFQUNHRSxTQURILENBQ2EsY0FEYixFQUM2QixZQUFXO0FBQ3BDLFNBQU87QUFDTEMsY0FBVSxJQURMO0FBRUxDLGNBQVUsbUNBRkw7QUFHTEMsZ0JBQVksSUFIUDtBQUlMQyxXQUFPLElBSkY7QUFLTEMsYUFBUyxJQUxKO0FBTUxDLFVBQU0sY0FBU0YsS0FBVCxFQUFnQkcsT0FBaEIsRUFBeUJDLEtBQXpCLEVBQWdDQyxVQUFoQyxFQUE0Q0MsWUFBNUMsRUFBMEQ7QUFDOUQ7QUFDQUEsbUJBQWFOLEtBQWIsRUFBb0IsVUFBU08sS0FBVCxFQUFnQjtBQUNsQ0osZ0JBQVFLLE1BQVIsQ0FBZUQsS0FBZjtBQUNELE9BRkQ7O0FBSUE7QUFDQSxVQUFJLENBQUMsa0JBQVFFLFdBQVIsQ0FBb0JMLE1BQU1NLEtBQTFCLENBQUwsRUFBc0M7QUFDcENQLGdCQUFRUSxXQUFSLENBQW9CLGVBQXBCLEVBQXFDQyxRQUFyQyxDQUE4QyxxQkFBOUM7QUFDRDtBQUNGO0FBaEJJLEdBQVA7QUFrQkQsQ0FwQkg7O0FBdUJBO2tCQUNlbEIsVSIsImZpbGUiOiJjb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1VSSBBbmd1bGFyIENvbnRhaW5lciBDb21wb25lbnRcbiAqIEBtb2R1bGUgYW5ndWxhci9jb250YWluZXJcbiAqL1xuXG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcblxuXG5jb25zdCBtb2R1bGVOYW1lID0gJ211aS5jb250YWluZXInO1xuXG5cbmFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUsIFtdKVxuICAuZGlyZWN0aXZlKCdtdWlDb250YWluZXInLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICB0ZW1wbGF0ZTogJzxkaXYgY2xhc3M9XCJtdWktY29udGFpbmVyXCI+PC9kaXY+JyxcbiAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICBzY29wZTogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGNvbnRyb2xsZXIsIHRyYW5zY2x1ZGVGbikge1xuICAgICAgICAvLyB1c2UgdHJhbnNjbHVkZUZuIHRvIHBhc3MgbmctY29udHJvbGxlciBvbiBwYXJlbnQgZWxlbWVudFxuICAgICAgICB0cmFuc2NsdWRlRm4oc2NvcGUsIGZ1bmN0aW9uKGNsb25lKSB7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBoYW5kbGUgZmx1aWQgY29udGFpbmVyc1xuICAgICAgICBpZiAoIWFuZ3VsYXIuaXNVbmRlZmluZWQoYXR0cnMuZmx1aWQpKXtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdtdWktY29udGFpbmVyJykuYWRkQ2xhc3MoJ211aS1jb250YWluZXItZmx1aWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH0pO1xuXG5cbi8qKiBEZWZpbmUgbW9kdWxlIEFQSSAqL1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlTmFtZTtcbiJdfQ==
},{"angular":"aeQg5j"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = window.angular;

var _angular2 = babelHelpers.interopRequireDefault(_angular);

var moduleName = 'mui.divider'; /**
                                 * MUI Angular Divider Component
                                 * @module angular/divider
                                 */

_angular2.default.module(moduleName, []).directive('muiDivider', function () {
  return {
    restrict: 'AE',
    replace: true,
    compile: function compile(tElement, tAttrs) {
      tElement.addClass('mui-divider');
    }
  };
});

/** Define module API */
exports.default = moduleName;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpdmlkZXIuanMiXSwibmFtZXMiOlsibW9kdWxlTmFtZSIsIm1vZHVsZSIsImRpcmVjdGl2ZSIsInJlc3RyaWN0IiwicmVwbGFjZSIsImNvbXBpbGUiLCJ0RWxlbWVudCIsInRBdHRycyIsImFkZENsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFLQTs7OztBQUdBLElBQU1BLGFBQWEsYUFBbkIsQyxDQVJBOzs7OztBQVdBLGtCQUFRQyxNQUFSLENBQWVELFVBQWYsRUFBMkIsRUFBM0IsRUFDR0UsU0FESCxDQUNhLFlBRGIsRUFDMkIsWUFBVztBQUNsQyxTQUFPO0FBQ0xDLGNBQVUsSUFETDtBQUVMQyxhQUFTLElBRko7QUFHTEMsYUFBUyxpQkFBU0MsUUFBVCxFQUFtQkMsTUFBbkIsRUFBMkI7QUFDbENELGVBQVNFLFFBQVQsQ0FBa0IsYUFBbEI7QUFDRDtBQUxJLEdBQVA7QUFPRCxDQVRIOztBQVlBO2tCQUNlUixVIiwiZmlsZSI6ImRpdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1VSSBBbmd1bGFyIERpdmlkZXIgQ29tcG9uZW50XG4gKiBAbW9kdWxlIGFuZ3VsYXIvZGl2aWRlclxuICovXG5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuXG5cbmNvbnN0IG1vZHVsZU5hbWUgPSAnbXVpLmRpdmlkZXInO1xuXG5cbmFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUsIFtdKVxuICAuZGlyZWN0aXZlKCdtdWlEaXZpZGVyJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIGNvbXBpbGU6IGZ1bmN0aW9uKHRFbGVtZW50LCB0QXR0cnMpIHtcbiAgICAgICAgdEVsZW1lbnQuYWRkQ2xhc3MoJ211aS1kaXZpZGVyJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuXG4vKiogRGVmaW5lIG1vZHVsZSBBUEkgKi9cbmV4cG9ydCBkZWZhdWx0IG1vZHVsZU5hbWU7XG4iXX0=
},{"angular":"aeQg5j"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = window.angular;

var _angular2 = babelHelpers.interopRequireDefault(_angular);

var moduleName = 'mui.dropdown-item'; /**
                                       * MUI Angular DropdownItem Component
                                       * @module angular/dropdown-item
                                       */

_angular2.default.module(moduleName, []).directive('muiDropdownItem', function () {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      link: '@'
    },
    transclude: true,
    template: '<li><a href="{{link}}" ng-transclude></a></li>'
  };
});

/** Define module API */
exports.default = moduleName;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLWl0ZW0uanMiXSwibmFtZXMiOlsibW9kdWxlTmFtZSIsIm1vZHVsZSIsImRpcmVjdGl2ZSIsInJlc3RyaWN0IiwicmVwbGFjZSIsInNjb3BlIiwibGluayIsInRyYW5zY2x1ZGUiLCJ0ZW1wbGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0E7Ozs7QUFHQSxJQUFNQSxhQUFhLG1CQUFuQixDLENBUkE7Ozs7O0FBV0Esa0JBQVFDLE1BQVIsQ0FBZUQsVUFBZixFQUEyQixFQUEzQixFQUNHRSxTQURILENBQ2EsaUJBRGIsRUFDZ0MsWUFBVztBQUN2QyxTQUFPO0FBQ0xDLGNBQVUsSUFETDtBQUVMQyxhQUFTLElBRko7QUFHTEMsV0FBTztBQUNMQyxZQUFNO0FBREQsS0FIRjtBQU1MQyxnQkFBWSxJQU5QO0FBT0xDLGNBQVU7QUFQTCxHQUFQO0FBU0QsQ0FYSDs7QUFjQTtrQkFDZVIsVSIsImZpbGUiOiJkcm9wZG93bi1pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNVUkgQW5ndWxhciBEcm9wZG93bkl0ZW0gQ29tcG9uZW50XG4gKiBAbW9kdWxlIGFuZ3VsYXIvZHJvcGRvd24taXRlbVxuICovXG5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuXG5cbmNvbnN0IG1vZHVsZU5hbWUgPSAnbXVpLmRyb3Bkb3duLWl0ZW0nO1xuXG5cbmFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUsIFtdKVxuICAuZGlyZWN0aXZlKCdtdWlEcm9wZG93bkl0ZW0nLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBRScsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgbGluazogJ0AnXG4gICAgICB9LFxuICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlOiAnPGxpPjxhIGhyZWY9XCJ7e2xpbmt9fVwiIG5nLXRyYW5zY2x1ZGU+PC9hPjwvbGk+J1xuICAgIH07XG4gIH0pO1xuXG5cbi8qKiBEZWZpbmUgbW9kdWxlIEFQSSAqL1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlTmFtZTtcbiJdfQ==
},{"angular":"aeQg5j"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = window.angular;

var _angular2 = babelHelpers.interopRequireDefault(_angular);

var moduleName = 'mui.dropdown'; /**
                                  * MUI Angular Dropdown Component
                                  * @module angular/dropdown
                                  */

_angular2.default.module(moduleName, []).directive('muiDropdown', ['$timeout', '$compile', function ($timeout, $compile) {
  return {
    restrict: 'AE',
    transclude: true,
    replace: true,
    scope: {
      variant: '@',
      color: '@',
      size: '@',
      open: '=?',
      ngDisabled: '='
    },
    template: '<div class="mui-dropdown">' + '<mui-button ' + 'variant="{{variant}}" ' + 'color="{{color}}" ' + 'size="{{size}}" ' + 'ng-click="onClick($event);" ' + '></mui-button>' + '<ul class="mui-dropdown__menu" ng-transclude></ul>' + '</div>',
    link: function link(scope, element, attrs) {
      var dropdownClass = 'mui-dropdown',
          menuClass = 'mui-dropdown__menu',
          openClass = 'mui--is-open',
          rightClass = 'mui-dropdown__menu--right',
          isUndef = _angular2.default.isUndefined,
          menuEl,
          buttonEl;

      // save references
      menuEl = _angular2.default.element(element[0].querySelector('.' + menuClass));
      buttonEl = _angular2.default.element(element[0].querySelector('.mui-btn'));

      menuEl.css('margin-top', '-3px');

      // handle is-open
      if (!isUndef(attrs.open)) scope.open = true;

      // handle disabled
      if (!isUndef(attrs.disabled)) {
        buttonEl.attr('disabled', true);
      }

      // handle right-align
      if (!isUndef(attrs.rightAlign)) menuEl.addClass(rightClass);

      // handle no-caret
      if (!isUndef(attrs.noCaret)) buttonEl.html(attrs.label);else buttonEl.html(attrs.label + ' <mui-caret></mui-caret>');

      function closeDropdownFn() {
        scope.open = false;
        scope.$apply();
      }

      // handle menu open
      scope.$watch('open', function (newValue) {
        if (newValue === true) {
          menuEl.addClass(openClass);
          document.addEventListener('click', closeDropdownFn);
        } else if (newValue === false) {
          menuEl.removeClass(openClass);
          document.removeEventListener('click', closeDropdownFn);
        }
      });

      // click handler
      scope.onClick = function ($event) {
        // exit if disabled
        if (scope.disabled) return;

        // prevent form submission
        $event.preventDefault();
        $event.stopPropagation();

        // toggle open 
        if (scope.open) scope.open = false;else scope.open = true;
      };
    }
  };
}]);

/** Define module API */
exports.default = moduleName;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLmpzIl0sIm5hbWVzIjpbIm1vZHVsZU5hbWUiLCJtb2R1bGUiLCJkaXJlY3RpdmUiLCIkdGltZW91dCIsIiRjb21waWxlIiwicmVzdHJpY3QiLCJ0cmFuc2NsdWRlIiwicmVwbGFjZSIsInNjb3BlIiwidmFyaWFudCIsImNvbG9yIiwic2l6ZSIsIm9wZW4iLCJuZ0Rpc2FibGVkIiwidGVtcGxhdGUiLCJsaW5rIiwiZWxlbWVudCIsImF0dHJzIiwiZHJvcGRvd25DbGFzcyIsIm1lbnVDbGFzcyIsIm9wZW5DbGFzcyIsInJpZ2h0Q2xhc3MiLCJpc1VuZGVmIiwiaXNVbmRlZmluZWQiLCJtZW51RWwiLCJidXR0b25FbCIsInF1ZXJ5U2VsZWN0b3IiLCJjc3MiLCJkaXNhYmxlZCIsImF0dHIiLCJyaWdodEFsaWduIiwiYWRkQ2xhc3MiLCJub0NhcmV0IiwiaHRtbCIsImxhYmVsIiwiY2xvc2VEcm9wZG93bkZuIiwiJGFwcGx5IiwiJHdhdGNoIiwibmV3VmFsdWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDbGFzcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbkNsaWNrIiwiJGV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBOzs7O0FBR0EsSUFBTUEsYUFBYSxjQUFuQixDLENBUkE7Ozs7O0FBV0Esa0JBQVFDLE1BQVIsQ0FBZUQsVUFBZixFQUEyQixFQUEzQixFQUNHRSxTQURILENBQ2EsYUFEYixFQUM0QixDQUFDLFVBQUQsRUFBYSxVQUFiLEVBQXlCLFVBQVNDLFFBQVQsRUFBbUJDLFFBQW5CLEVBQTZCO0FBQzlFLFNBQU87QUFDTEMsY0FBVSxJQURMO0FBRUxDLGdCQUFZLElBRlA7QUFHTEMsYUFBVSxJQUhMO0FBSUxDLFdBQU87QUFDTEMsZUFBUyxHQURKO0FBRUxDLGFBQU8sR0FGRjtBQUdMQyxZQUFNLEdBSEQ7QUFJTEMsWUFBTSxJQUpEO0FBS0xDLGtCQUFZO0FBTFAsS0FKRjtBQVdMQyxjQUFVLCtCQUNSLGNBRFEsR0FFUix3QkFGUSxHQUdSLG9CQUhRLEdBSVIsa0JBSlEsR0FLUiw4QkFMUSxHQU1SLGdCQU5RLEdBT1Isb0RBUFEsR0FRUixRQW5CRztBQW9CTEMsVUFBTSxjQUFTUCxLQUFULEVBQWdCUSxPQUFoQixFQUF5QkMsS0FBekIsRUFBZ0M7QUFDcEMsVUFBSUMsZ0JBQWdCLGNBQXBCO0FBQUEsVUFDSUMsWUFBWSxvQkFEaEI7QUFBQSxVQUVJQyxZQUFZLGNBRmhCO0FBQUEsVUFHSUMsYUFBYSwyQkFIakI7QUFBQSxVQUlJQyxVQUFVLGtCQUFRQyxXQUp0QjtBQUFBLFVBS0lDLE1BTEo7QUFBQSxVQU1JQyxRQU5KOztBQVFBO0FBQ0FELGVBQVMsa0JBQVFSLE9BQVIsQ0FBZ0JBLFFBQVEsQ0FBUixFQUFXVSxhQUFYLENBQXlCLE1BQU1QLFNBQS9CLENBQWhCLENBQVQ7QUFDQU0saUJBQVcsa0JBQVFULE9BQVIsQ0FBZ0JBLFFBQVEsQ0FBUixFQUFXVSxhQUFYLENBQXlCLFVBQXpCLENBQWhCLENBQVg7O0FBRUFGLGFBQU9HLEdBQVAsQ0FBVyxZQUFYLEVBQXlCLE1BQXpCOztBQUVBO0FBQ0EsVUFBSSxDQUFDTCxRQUFRTCxNQUFNTCxJQUFkLENBQUwsRUFBMEJKLE1BQU1JLElBQU4sR0FBYSxJQUFiOztBQUUxQjtBQUNBLFVBQUksQ0FBQ1UsUUFBUUwsTUFBTVcsUUFBZCxDQUFMLEVBQThCO0FBQzVCSCxpQkFBU0ksSUFBVCxDQUFjLFVBQWQsRUFBMEIsSUFBMUI7QUFDRDs7QUFFRDtBQUNBLFVBQUksQ0FBQ1AsUUFBUUwsTUFBTWEsVUFBZCxDQUFMLEVBQWdDTixPQUFPTyxRQUFQLENBQWdCVixVQUFoQjs7QUFFaEM7QUFDQSxVQUFJLENBQUNDLFFBQVFMLE1BQU1lLE9BQWQsQ0FBTCxFQUE2QlAsU0FBU1EsSUFBVCxDQUFjaEIsTUFBTWlCLEtBQXBCLEVBQTdCLEtBQ0tULFNBQVNRLElBQVQsQ0FBY2hCLE1BQU1pQixLQUFOLEdBQWMsMEJBQTVCOztBQUVMLGVBQVNDLGVBQVQsR0FBMkI7QUFDekIzQixjQUFNSSxJQUFOLEdBQWEsS0FBYjtBQUNBSixjQUFNNEIsTUFBTjtBQUNEOztBQUVEO0FBQ0E1QixZQUFNNkIsTUFBTixDQUFhLE1BQWIsRUFBcUIsVUFBU0MsUUFBVCxFQUFtQjtBQUN0QyxZQUFJQSxhQUFhLElBQWpCLEVBQXVCO0FBQ3JCZCxpQkFBT08sUUFBUCxDQUFnQlgsU0FBaEI7QUFDQW1CLG1CQUFTQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQ0wsZUFBbkM7QUFDRCxTQUhELE1BR08sSUFBSUcsYUFBYSxLQUFqQixFQUF3QjtBQUM3QmQsaUJBQU9pQixXQUFQLENBQW1CckIsU0FBbkI7QUFDQW1CLG1CQUFTRyxtQkFBVCxDQUE2QixPQUE3QixFQUFzQ1AsZUFBdEM7QUFDRDtBQUNGLE9BUkQ7O0FBVUE7QUFDQTNCLFlBQU1tQyxPQUFOLEdBQWdCLFVBQVNDLE1BQVQsRUFBaUI7QUFDL0I7QUFDQSxZQUFJcEMsTUFBTW9CLFFBQVYsRUFBb0I7O0FBRXBCO0FBQ0FnQixlQUFPQyxjQUFQO0FBQ0FELGVBQU9FLGVBQVA7O0FBRUE7QUFDQSxZQUFJdEMsTUFBTUksSUFBVixFQUFnQkosTUFBTUksSUFBTixHQUFhLEtBQWIsQ0FBaEIsS0FDS0osTUFBTUksSUFBTixHQUFhLElBQWI7QUFDTixPQVhEO0FBWUQ7QUEvRUksR0FBUDtBQWlGRCxDQWxGeUIsQ0FENUI7O0FBc0ZBO2tCQUNlWixVIiwiZmlsZSI6ImRyb3Bkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNVUkgQW5ndWxhciBEcm9wZG93biBDb21wb25lbnRcbiAqIEBtb2R1bGUgYW5ndWxhci9kcm9wZG93blxuICovXG5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuXG5cbmNvbnN0IG1vZHVsZU5hbWUgPSAnbXVpLmRyb3Bkb3duJztcblxuXG5hbmd1bGFyLm1vZHVsZShtb2R1bGVOYW1lLCBbXSlcbiAgLmRpcmVjdGl2ZSgnbXVpRHJvcGRvd24nLCBbJyR0aW1lb3V0JywgJyRjb21waWxlJywgZnVuY3Rpb24oJHRpbWVvdXQsICRjb21waWxlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgIHJlcGxhY2UgOiB0cnVlLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgdmFyaWFudDogJ0AnLFxuICAgICAgICBjb2xvcjogJ0AnLFxuICAgICAgICBzaXplOiAnQCcsXG4gICAgICAgIG9wZW46ICc9PycsXG4gICAgICAgIG5nRGlzYWJsZWQ6ICc9J1xuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cIm11aS1kcm9wZG93blwiPicgK1xuICAgICAgICAnPG11aS1idXR0b24gJyArXG4gICAgICAgICd2YXJpYW50PVwie3t2YXJpYW50fX1cIiAnICsgXG4gICAgICAgICdjb2xvcj1cInt7Y29sb3J9fVwiICcgK1xuICAgICAgICAnc2l6ZT1cInt7c2l6ZX19XCIgJyArXG4gICAgICAgICduZy1jbGljaz1cIm9uQ2xpY2soJGV2ZW50KTtcIiAnICtcbiAgICAgICAgJz48L211aS1idXR0b24+JyArXG4gICAgICAgICc8dWwgY2xhc3M9XCJtdWktZHJvcGRvd25fX21lbnVcIiBuZy10cmFuc2NsdWRlPjwvdWw+JytcbiAgICAgICAgJzwvZGl2PicsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgdmFyIGRyb3Bkb3duQ2xhc3MgPSAnbXVpLWRyb3Bkb3duJyxcbiAgICAgICAgICAgIG1lbnVDbGFzcyA9ICdtdWktZHJvcGRvd25fX21lbnUnLFxuICAgICAgICAgICAgb3BlbkNsYXNzID0gJ211aS0taXMtb3BlbicsXG4gICAgICAgICAgICByaWdodENsYXNzID0gJ211aS1kcm9wZG93bl9fbWVudS0tcmlnaHQnLFxuICAgICAgICAgICAgaXNVbmRlZiA9IGFuZ3VsYXIuaXNVbmRlZmluZWQsXG4gICAgICAgICAgICBtZW51RWwsXG4gICAgICAgICAgICBidXR0b25FbDtcblxuICAgICAgICAvLyBzYXZlIHJlZmVyZW5jZXNcbiAgICAgICAgbWVudUVsID0gYW5ndWxhci5lbGVtZW50KGVsZW1lbnRbMF0ucXVlcnlTZWxlY3RvcignLicgKyBtZW51Q2xhc3MpKTtcbiAgICAgICAgYnV0dG9uRWwgPSBhbmd1bGFyLmVsZW1lbnQoZWxlbWVudFswXS5xdWVyeVNlbGVjdG9yKCcubXVpLWJ0bicpKTtcblxuICAgICAgICBtZW51RWwuY3NzKCdtYXJnaW4tdG9wJywgJy0zcHgnKTtcblxuICAgICAgICAvLyBoYW5kbGUgaXMtb3BlblxuICAgICAgICBpZiAoIWlzVW5kZWYoYXR0cnMub3BlbikpIHNjb3BlLm9wZW4gPSB0cnVlO1xuXG4gICAgICAgIC8vIGhhbmRsZSBkaXNhYmxlZFxuICAgICAgICBpZiAoIWlzVW5kZWYoYXR0cnMuZGlzYWJsZWQpKSB7XG4gICAgICAgICAgYnV0dG9uRWwuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSByaWdodC1hbGlnblxuICAgICAgICBpZiAoIWlzVW5kZWYoYXR0cnMucmlnaHRBbGlnbikpIG1lbnVFbC5hZGRDbGFzcyhyaWdodENsYXNzKTtcblxuICAgICAgICAvLyBoYW5kbGUgbm8tY2FyZXRcbiAgICAgICAgaWYgKCFpc1VuZGVmKGF0dHJzLm5vQ2FyZXQpKSBidXR0b25FbC5odG1sKGF0dHJzLmxhYmVsKTtcbiAgICAgICAgZWxzZSBidXR0b25FbC5odG1sKGF0dHJzLmxhYmVsICsgJyA8bXVpLWNhcmV0PjwvbXVpLWNhcmV0PicpOyBcblxuICAgICAgICBmdW5jdGlvbiBjbG9zZURyb3Bkb3duRm4oKSB7XG4gICAgICAgICAgc2NvcGUub3BlbiA9IGZhbHNlO1xuICAgICAgICAgIHNjb3BlLiRhcHBseSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIG1lbnUgb3BlblxuICAgICAgICBzY29wZS4kd2F0Y2goJ29wZW4nLCBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbWVudUVsLmFkZENsYXNzKG9wZW5DbGFzcyk7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRHJvcGRvd25Gbik7XG4gICAgICAgICAgfSBlbHNlIGlmIChuZXdWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG1lbnVFbC5yZW1vdmVDbGFzcyhvcGVuQ2xhc3MpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZURyb3Bkb3duRm4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY2xpY2sgaGFuZGxlclxuICAgICAgICBzY29wZS5vbkNsaWNrID0gZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgLy8gZXhpdCBpZiBkaXNhYmxlZFxuICAgICAgICAgIGlmIChzY29wZS5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgICAgICAgLy8gcHJldmVudCBmb3JtIHN1Ym1pc3Npb25cbiAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAvLyB0b2dnbGUgb3BlbiBcbiAgICAgICAgICBpZiAoc2NvcGUub3Blbikgc2NvcGUub3BlbiA9IGZhbHNlO1xuICAgICAgICAgIGVsc2Ugc2NvcGUub3BlbiA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgfV0pO1xuXG5cbi8qKiBEZWZpbmUgbW9kdWxlIEFQSSAqL1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlTmFtZTtcbiJdfQ==
},{"angular":"aeQg5j"}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = window.angular;

var _angular2 = babelHelpers.interopRequireDefault(_angular);

var moduleName = 'mui.form'; /**
                              * MUI Angular Form Directive
                              * @module angular/form
                              */

_angular2.default.module(moduleName, []).directive('muiForm', function () {
  return {
    restrict: 'AE',
    template: '<form class="mui-form"></form>',
    transclude: true,
    scope: true,
    replace: true,
    link: function link(scope, element, attrs, controller, transcludeFn) {
      // use transcludeFn to pass ng-controller on parent element
      transcludeFn(scope, function (clone) {
        element.append(clone);
      });

      // handle inline forms
      if (!_angular2.default.isUndefined(attrs.inline)) {
        element.addClass('mui-form--inline');
      }
    }
  };
});

/** Define module API */
exports.default = moduleName;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uanMiXSwibmFtZXMiOlsibW9kdWxlTmFtZSIsIm1vZHVsZSIsImRpcmVjdGl2ZSIsInJlc3RyaWN0IiwidGVtcGxhdGUiLCJ0cmFuc2NsdWRlIiwic2NvcGUiLCJyZXBsYWNlIiwibGluayIsImVsZW1lbnQiLCJhdHRycyIsImNvbnRyb2xsZXIiLCJ0cmFuc2NsdWRlRm4iLCJjbG9uZSIsImFwcGVuZCIsImlzVW5kZWZpbmVkIiwiaW5saW5lIiwiYWRkQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBOzs7O0FBR0EsSUFBTUEsYUFBYSxVQUFuQixDLENBUkE7Ozs7O0FBV0Esa0JBQVFDLE1BQVIsQ0FBZUQsVUFBZixFQUEyQixFQUEzQixFQUNHRSxTQURILENBQ2EsU0FEYixFQUN3QixZQUFXO0FBQy9CLFNBQU87QUFDTEMsY0FBVSxJQURMO0FBRUxDLGNBQVUsZ0NBRkw7QUFHTEMsZ0JBQVksSUFIUDtBQUlMQyxXQUFPLElBSkY7QUFLTEMsYUFBUyxJQUxKO0FBTUxDLFVBQU0sY0FBU0YsS0FBVCxFQUFnQkcsT0FBaEIsRUFBeUJDLEtBQXpCLEVBQWdDQyxVQUFoQyxFQUE0Q0MsWUFBNUMsRUFBMEQ7QUFDOUQ7QUFDQUEsbUJBQWFOLEtBQWIsRUFBb0IsVUFBU08sS0FBVCxFQUFnQjtBQUNsQ0osZ0JBQVFLLE1BQVIsQ0FBZUQsS0FBZjtBQUNELE9BRkQ7O0FBSUE7QUFDQSxVQUFJLENBQUMsa0JBQVFFLFdBQVIsQ0FBb0JMLE1BQU1NLE1BQTFCLENBQUwsRUFBd0M7QUFDdENQLGdCQUFRUSxRQUFSLENBQWlCLGtCQUFqQjtBQUNEO0FBQ0Y7QUFoQkksR0FBUDtBQWtCRCxDQXBCSDs7QUF1QkE7a0JBQ2VqQixVIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1VSSBBbmd1bGFyIEZvcm0gRGlyZWN0aXZlXG4gKiBAbW9kdWxlIGFuZ3VsYXIvZm9ybVxuICovXG5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuXG5cbmNvbnN0IG1vZHVsZU5hbWUgPSAnbXVpLmZvcm0nO1xuXG5cbmFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUsIFtdKVxuICAuZGlyZWN0aXZlKCdtdWlGb3JtJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgdGVtcGxhdGU6ICc8Zm9ybSBjbGFzcz1cIm11aS1mb3JtXCI+PC9mb3JtPicsXG4gICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgc2NvcGU6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjb250cm9sbGVyLCB0cmFuc2NsdWRlRm4pIHtcbiAgICAgICAgLy8gdXNlIHRyYW5zY2x1ZGVGbiB0byBwYXNzIG5nLWNvbnRyb2xsZXIgb24gcGFyZW50IGVsZW1lbnRcbiAgICAgICAgdHJhbnNjbHVkZUZuKHNjb3BlLCBmdW5jdGlvbihjbG9uZSkge1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaGFuZGxlIGlubGluZSBmb3Jtc1xuICAgICAgICBpZiAoIWFuZ3VsYXIuaXNVbmRlZmluZWQoYXR0cnMuaW5saW5lKSkge1xuICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoJ211aS1mb3JtLS1pbmxpbmUnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH0pO1xuXG5cbi8qKiBEZWZpbmUgbW9kdWxlIEFQSSAqL1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlTmFtZTtcbiJdfQ==
},{"angular":"aeQg5j"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = window.angular;

var _angular2 = babelHelpers.interopRequireDefault(_angular);

var moduleName = 'mui.input';

/**
 * Build directive function.
 * @param {Boolean} isTextArea
 */
/**
 * MUI Angular Input and Textarea Components
 * @module angular/input
 */

function inputFactory(isTextArea) {
  var scopeArgs, template, ngClassStr, attrs;

  // defaults
  scopeArgs = {
    floatLabel: '@',
    hint: '@',
    label: '@',
    name: '@',
    ngDisabled: '=',
    ngMaxlength: '@',
    ngMinlength: '@',
    ngModel: '='
  };

  template = '<div class="mui-textfield">';

  ngClassStr = '{' + ["'mui--is-touched': inputCtrl.$touched", // hasn't lost focus yet
  "'mui--is-untouched': inputCtrl.$untouched", "'mui--is-pristine': inputCtrl.$pristine", // user hasn't interacted yet
  "'mui--is-dirty': inputCtrl.$dirty", "'mui--is-empty': inputCtrl.$isEmpty(inputCtrl.$viewValue)", "'mui--is-not-empty': !inputCtrl.$isEmpty(inputCtrl.$viewValue)", "'mui--is-invalid': inputCtrl.$invalid"].join(',') + '}';

  attrs = ['name={{name}}', 'placeholder={{hint}}', 'ng-class="' + ngClassStr + '"', 'ng-disabled="ngDisabled"', 'ng-maxlength={{ngMaxlength}}', 'ng-minlength={{ngMinlength}}', 'ng-model="ngModel"'];

  // element-specific
  if (!isTextArea) {
    scopeArgs.type = '@';
    attrs.push('type={{type}}');
    template += '<input ' + attrs.join(' ') + '>';
  } else {
    scopeArgs.rows = '@';
    attrs.push('rows={{rows}}');
    template += '<textarea ' + attrs.join(' ') + '></textarea>';
  }

  // update template
  template += '<label>{{label}}</label></div>';

  // directive function
  return ['$timeout', function ($timeout) {
    return {
      restrict: 'AE',
      require: ['ngModel'],
      scope: scopeArgs,
      replace: true,
      template: template,
      link: function link(scope, element, attrs, controllers) {
        var inputEl = element.find(isTextArea ? 'textarea' : 'input'),
            labelEl = element.find('label'),
            ngModelCtrl = controllers[0],
            formCtrl = controllers[1],
            isUndef = _angular2.default.isUndefined,
            el = inputEl[0];

        // add inputCrl to scope
        scope.inputCtrl = inputEl.controller('ngModel');

        // disable MUI js
        if (el) el._muiTextfield = true;

        // remove attributes from wrapper
        element.removeAttr('ng-change');
        element.removeAttr('ng-model');
        element.removeAttr('ng-minlength');
        element.removeAttr('ng-maxlength');

        // scope defaults
        if (!isTextArea) scope.type = scope.type || 'text';else scope.rows = scope.rows || 2;

        // autofocus
        if (!isUndef(attrs.autofocus)) inputEl[0].focus();

        // required
        if (!isUndef(attrs.required)) inputEl.prop('required', true);

        // invalid
        if (!isUndef(attrs.invalid)) inputEl.addClass('mui--is-invalid');

        // float-label
        if (!isUndef(scope.floatLabel)) {
          element.addClass('mui-textfield--float-label');

          $timeout(function () {
            labelEl.css({
              'transition': '.15s ease-out',
              '-webkit-transition': '.15s ease-out',
              '-moz-transition': '.15s ease-out',
              '-o-transition': '.15s ease-out',
              '-ms-transition': '.15s ease-out'
            });
          }, 150);
        }

        // handle changes
        scope.onChange = function () {
          // trigger ng-change on parent
          if (ngModelCtrl) ngModelCtrl.$setViewValue(scope.ngModel);
        };
      }
    };
  }];
}

_angular2.default.module(moduleName, []).directive('muiInput', inputFactory(false)).directive('muiTextarea', inputFactory(true));

/** Define module API */
exports.default = moduleName;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmpzIl0sIm5hbWVzIjpbIm1vZHVsZU5hbWUiLCJpbnB1dEZhY3RvcnkiLCJpc1RleHRBcmVhIiwic2NvcGVBcmdzIiwidGVtcGxhdGUiLCJuZ0NsYXNzU3RyIiwiYXR0cnMiLCJmbG9hdExhYmVsIiwiaGludCIsImxhYmVsIiwibmFtZSIsIm5nRGlzYWJsZWQiLCJuZ01heGxlbmd0aCIsIm5nTWlubGVuZ3RoIiwibmdNb2RlbCIsImpvaW4iLCJ0eXBlIiwicHVzaCIsInJvd3MiLCIkdGltZW91dCIsInJlc3RyaWN0IiwicmVxdWlyZSIsInNjb3BlIiwicmVwbGFjZSIsImxpbmsiLCJlbGVtZW50IiwiY29udHJvbGxlcnMiLCJpbnB1dEVsIiwiZmluZCIsImxhYmVsRWwiLCJuZ01vZGVsQ3RybCIsImZvcm1DdHJsIiwiaXNVbmRlZiIsImlzVW5kZWZpbmVkIiwiZWwiLCJpbnB1dEN0cmwiLCJjb250cm9sbGVyIiwiX211aVRleHRmaWVsZCIsInJlbW92ZUF0dHIiLCJhdXRvZm9jdXMiLCJmb2N1cyIsInJlcXVpcmVkIiwicHJvcCIsImludmFsaWQiLCJhZGRDbGFzcyIsImNzcyIsIm9uQ2hhbmdlIiwiJHNldFZpZXdWYWx1ZSIsIm1vZHVsZSIsImRpcmVjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0E7Ozs7QUFHQSxJQUFNQSxhQUFhLFdBQW5COztBQUdBOzs7O0FBWEE7Ozs7O0FBZUEsU0FBU0MsWUFBVCxDQUFzQkMsVUFBdEIsRUFBa0M7QUFDaEMsTUFBSUMsU0FBSixFQUNJQyxRQURKLEVBRUlDLFVBRkosRUFHSUMsS0FISjs7QUFLQTtBQUNBSCxjQUFZO0FBQ1ZJLGdCQUFZLEdBREY7QUFFVkMsVUFBTSxHQUZJO0FBR1ZDLFdBQU8sR0FIRztBQUlWQyxVQUFNLEdBSkk7QUFLVkMsZ0JBQVksR0FMRjtBQU1WQyxpQkFBYSxHQU5IO0FBT1ZDLGlCQUFhLEdBUEg7QUFRVkMsYUFBUztBQVJDLEdBQVo7O0FBV0FWLGFBQVcsNkJBQVg7O0FB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LGVBSFQ7QUFJViwrQkFBaUIsZUFKUDtBQUtWLGdDQUFrQjtBQUxSLGFBQVo7QUFPRCxXQVJELEVBUUcsR0FSSDtBQVNEOztBQUVEO0FBQ0F2QixjQUFNd0IsUUFBTixHQUFpQixZQUFXO0FBQzFCO0FBQ0EsY0FBSWhCLFdBQUosRUFBaUJBLFlBQVlpQixhQUFaLENBQTBCekIsTUFBTVIsT0FBaEM7QUFDbEIsU0FIRDtBQUlEO0FBM0RJLEtBQVA7QUE2REQsR0E5RE0sQ0FBUDtBQStERDs7QUFHRCxrQkFBUWtDLE1BQVIsQ0FBZWhELFVBQWYsRUFBMkIsRUFBM0IsRUFDR2lELFNBREgsQ0FDYSxVQURiLEVBQ3lCaEQsYUFBYSxLQUFiLENBRHpCLEVBRUdnRCxTQUZILENBRWEsYUFGYixFQUU0QmhELGFBQWEsSUFBYixDQUY1Qjs7QUFLQTtrQkFDZUQsVSIsImZpbGUiOiJpbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTVVJIEFuZ3VsYXIgSW5wdXQgYW5kIFRleHRhcmVhIENvbXBvbmVudHNcbiAqIEBtb2R1bGUgYW5ndWxhci9pbnB1dFxuICovXG5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuXG5cbmNvbnN0IG1vZHVsZU5hbWUgPSAnbXVpLmlucHV0JztcblxuXG4vKipcbiAqIEJ1aWxkIGRpcmVjdGl2ZSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNUZXh0QXJlYVxuICovXG5mdW5jdGlvbiBpbnB1dEZhY3RvcnkoaXNUZXh0QXJlYSkge1xuICB2YXIgc2NvcGVBcmdzLFxuICAgICAgdGVtcGxhdGUsXG4gICAgICBuZ0NsYXNzU3RyLFxuICAgICAgYXR0cnM7XG5cbiAgLy8gZGVmYXVsdHNcbiAgc2NvcGVBcmdzID0ge1xuICAgIGZsb2F0TGFiZWw6ICdAJyxcbiAgICBoaW50OiAnQCcsXG4gICAgbGFiZWw6ICdAJyxcbiAgICBuYW1lOiAnQCcsXG4gICAgbmdEaXNhYmxlZDogJz0nLFxuICAgIG5nTWF4bGVuZ3RoOiAnQCcsXG4gICAgbmdNaW5sZW5ndGg6ICdAJyxcbiAgICBuZ01vZGVsOiAnPSdcbiAgfTtcblxuICB0ZW1wbGF0ZSA9ICc8ZGl2IGNsYXNzPVwibXVpLXRleHRmaWVsZFwiPic7XG5cbiAgbmdDbGFzc1N0ciA9ICd7JyArIFtcbiAgICBcIidtdWktLWlzLXRvdWNoZWQnOiBpbnB1dEN0cmwuJHRvdWNoZWRcIiwgIC8vIGhhc24ndCBsb3N0IGZvY3VzIHlldFxuICAgIFwiJ211aS0taXMtdW50b3VjaGVkJzogaW5wdXRDdHJsLiR1bnRvdWNoZWRcIixcbiAgICBcIidtdWktLWlzLXByaXN0aW5lJzogaW5wdXRDdHJsLiRwcmlzdGluZVwiLCAgLy8gdXNlciBoYXNuJ3QgaW50ZXJhY3RlZCB5ZXRcbiAgICBcIidtdWktLWlzLWRpcnR5JzogaW5wdXRDdHJsLiRkaXJ0eVwiLFxuICAgIFwiJ211aS0taXMtZW1wdHknOiBpbnB1dEN0cmwuJGlzRW1wdHkoaW5wdXRDdHJsLiR2aWV3VmFsdWUpXCIsXG4gICAgXCInbXVpLS1pcy1ub3QtZW1wdHknOiAhaW5wdXRDdHJsLiRpc0VtcHR5KGlucHV0Q3RybC4kdmlld1ZhbHVlKVwiLFxuICAgIFwiJ211aS0taXMtaW52YWxpZCc6IGlucHV0Q3RybC4kaW52YWxpZFwiXG4gIF0uam9pbignLCcpICsgJ30nO1xuXG4gIGF0dHJzID0gW1xuICAgICduYW1lPXt7bmFtZX19JyxcbiAgICAncGxhY2Vob2xkZXI9e3toaW50fX0nLFxuICAgICduZy1jbGFzcz1cIicgKyBuZ0NsYXNzU3RyICsgJ1wiJyxcbiAgICAnbmctZGlzYWJsZWQ9XCJuZ0Rpc2FibGVkXCInLFxuICAgICduZy1tYXhsZW5ndGg9e3tuZ01heGxlbmd0aH19JyxcbiAgICAnbmctbWlubGVuZ3RoPXt7bmdNaW5sZW5ndGh9fScsXG4gICAgJ25nLW1vZGVsPVwibmdNb2RlbFwiJyxcbiAgXTtcblxuICAvLyBlbGVtZW50LXNwZWNpZmljXG4gIGlmICghaXNUZXh0QXJlYSkge1xuICAgIHNjb3BlQXJncy50eXBlID0gJ0AnO1xuICAgIGF0dHJzLnB1c2goJ3R5cGU9e3t0eXBlfX0nKTtcbiAgICB0ZW1wbGF0ZSArPSAnPGlucHV0ICcgKyBhdHRycy5qb2luKCcgJykgKyAnPic7XG4gIH0gZWxzZSB7XG4gICAgc2NvcGVBcmdzLnJvd3MgPSAnQCc7XG4gICAgYXR0cnMucHVzaCgncm93cz17e3Jvd3N9fScpO1xuICAgIHRlbXBsYXRlICs9ICc8dGV4dGFyZWEgJyArIGF0dHJzLmpvaW4oJyAnKSArICc+PC90ZXh0YXJlYT4nO1xuICB9XG5cbiAgLy8gdXBkYXRlIHRlbXBsYXRlXG4gIHRlbXBsYXRlICs9ICc8bGFiZWw+e3tsYWJlbH19PC9sYWJlbD48L2Rpdj4nO1xuXG4gIC8vIGRpcmVjdGl2ZSBmdW5jdGlvblxuICByZXR1cm4gWyckdGltZW91dCcsIGZ1bmN0aW9uKCR0aW1lb3V0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgcmVxdWlyZTogWyduZ01vZGVsJ10sXG4gICAgICBzY29wZTogc2NvcGVBcmdzLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY29udHJvbGxlcnMpIHtcbiAgICAgICAgdmFyIGlucHV0RWwgPSBlbGVtZW50LmZpbmQoaXNUZXh0QXJlYSA/ICd0ZXh0YXJlYScgOiAnaW5wdXQnKSxcbiAgICAgICAgICAgIGxhYmVsRWwgPSBlbGVtZW50LmZpbmQoJ2xhYmVsJyksXG4gICAgICAgICAgICBuZ01vZGVsQ3RybCA9IGNvbnRyb2xsZXJzWzBdLFxuICAgICAgICAgICAgZm9ybUN0cmwgPSBjb250cm9sbGVyc1sxXSxcbiAgICAgICAgICAgIGlzVW5kZWYgPSBhbmd1bGFyLmlzVW5kZWZpbmVkLFxuICAgICAgICAgICAgZWwgPSBpbnB1dEVsWzBdO1xuXG4gICAgICAgIC8vIGFkZCBpbnB1dENybCB0byBzY29wZVxuICAgICAgICBzY29wZS5pbnB1dEN0cmwgPSBpbnB1dEVsLmNvbnRyb2xsZXIoJ25nTW9kZWwnKTtcblxuICAgICAgICAvLyBkaXNhYmxlIE1VSSBqc1xuICAgICAgICBpZiAoZWwpIGVsLl9tdWlUZXh0ZmllbGQgPSB0cnVlO1xuXG4gICAgICAgIC8vIHJlbW92ZSBhdHRyaWJ1dGVzIGZyb20gd3JhcHBlclxuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHIoJ25nLWNoYW5nZScpO1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHIoJ25nLW1vZGVsJyk7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cignbmctbWlubGVuZ3RoJyk7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cignbmctbWF4bGVuZ3RoJyk7XG5cbiAgICAgICAgLy8gc2NvcGUgZGVmYXVsdHNcbiAgICAgICAgaWYgKCFpc1RleHRBcmVhKSBzY29wZS50eXBlID0gc2NvcGUudHlwZSB8fCAndGV4dCc7XG4gICAgICAgIGVsc2Ugc2NvcGUucm93cyA9IHNjb3BlLnJvd3MgfHwgMjtcbiAgICAgICAgXG4gICAgICAgIC8vIGF1dG9mb2N1c1xuICAgICAgICBpZiAoIWlzVW5kZWYoYXR0cnMuYXV0b2ZvY3VzKSkgaW5wdXRFbFswXS5mb2N1cygpO1xuXG4gICAgICAgIC8vIHJlcXVpcmVkXG4gICAgICAgIGlmICghaXNVbmRlZihhdHRycy5yZXF1aXJlZCkpIGlucHV0RWwucHJvcCgncmVxdWlyZWQnLCB0cnVlKTtcblxuICAgICAgICAvLyBpbnZhbGlkXG4gICAgICAgIGlmICghaXNVbmRlZihhdHRycy5pbnZhbGlkKSkgaW5wdXRFbC5hZGRDbGFzcygnbXVpLS1pcy1pbnZhbGlkJyk7XG5cbiAgICAgICAgLy8gZmxvYXQtbGFiZWxcbiAgICAgICAgaWYgKCFpc1VuZGVmKHNjb3BlLmZsb2F0TGFiZWwpKSB7XG4gICAgICAgICAgZWxlbWVudC5hZGRDbGFzcygnbXVpLXRleHRmaWVsZC0tZmxvYXQtbGFiZWwnKTtcblxuICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGFiZWxFbC5jc3Moe1xuICAgICAgICAgICAgICAndHJhbnNpdGlvbic6ICcuMTVzIGVhc2Utb3V0JyxcbiAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNpdGlvbic6ICcuMTVzIGVhc2Utb3V0JyxcbiAgICAgICAgICAgICAgJy1tb3otdHJhbnNpdGlvbic6ICcuMTVzIGVhc2Utb3V0JyxcbiAgICAgICAgICAgICAgJy1vLXRyYW5zaXRpb24nOiAnLjE1cyBlYXNlLW91dCcsXG4gICAgICAgICAgICAgICctbXMtdHJhbnNpdGlvbic6ICcuMTVzIGVhc2Utb3V0JyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSwgMTUwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBjaGFuZ2VzXG4gICAgICAgIHNjb3BlLm9uQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gdHJpZ2dlciBuZy1jaGFuZ2Ugb24gcGFyZW50XG4gICAgICAgICAgaWYgKG5nTW9kZWxDdHJsKSBuZ01vZGVsQ3RybC4kc2V0Vmlld1ZhbHVlKHNjb3BlLm5nTW9kZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfV07XG59XG5cblxuYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSwgW10pXG4gIC5kaXJlY3RpdmUoJ211aUlucHV0JywgaW5wdXRGYWN0b3J5KGZhbHNlKSlcbiAgLmRpcmVjdGl2ZSgnbXVpVGV4dGFyZWEnLCBpbnB1dEZhY3RvcnkodHJ1ZSkpO1xuXG5cbi8qKiBEZWZpbmUgbW9kdWxlIEFQSSAqL1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlTmFtZTtcbiJdfQ==
},{"angular":"aeQg5j"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = window.angular;

var _angular2 = babelHelpers.interopRequireDefault(_angular);

var moduleName = 'mui.panel'; /**
                               * MUI Angular Panel Component
                               * @module angular/panel
                               */

_angular2.default.module(moduleName, []).directive('muiPanel', function () {
  return {
    restrict: 'AE',
    replace: true,
    scope: true,
    template: '<div class="mui-panel"></div>',
    transclude: true,
    link: function link(scope, element, attr, controller, transcludeFn) {
      transcludeFn(scope, function (clone) {
        element.append(clone);
      });
    }
  };
});

/** Define module API */
exports.default = moduleName;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsLmpzIl0sIm5hbWVzIjpbIm1vZHVsZU5hbWUiLCJtb2R1bGUiLCJkaXJlY3RpdmUiLCJyZXN0cmljdCIsInJlcGxhY2UiLCJzY29wZSIsInRlbXBsYXRlIiwidHJhbnNjbHVkZSIsImxpbmsiLCJlbGVtZW50IiwiYXR0ciIsImNvbnRyb2xsZXIiLCJ0cmFuc2NsdWRlRm4iLCJjbG9uZSIsImFwcGVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0E7Ozs7QUFHQSxJQUFNQSxhQUFhLFdBQW5CLEMsQ0FSQTs7Ozs7QUFXQSxrQkFBUUMsTUFBUixDQUFlRCxVQUFmLEVBQTJCLEVBQTNCLEVBQ0dFLFNBREgsQ0FDYSxVQURiLEVBQ3lCLFlBQVc7QUFDaEMsU0FBTztBQUNMQyxjQUFVLElBREw7QUFFTEMsYUFBUyxJQUZKO0FBR0xDLFdBQVEsSUFISDtBQUlMQyxjQUFVLCtCQUpMO0FBS0xDLGdCQUFZLElBTFA7QUFNTEMsVUFBTSxjQUFTSCxLQUFULEVBQWdCSSxPQUFoQixFQUF5QkMsSUFBekIsRUFBK0JDLFVBQS9CLEVBQTJDQyxZQUEzQyxFQUF5RDtBQUM3REEsbUJBQWFQLEtBQWIsRUFBb0IsVUFBU1EsS0FBVCxFQUFnQjtBQUNsQ0osZ0JBQVFLLE1BQVIsQ0FBZUQsS0FBZjtBQUNELE9BRkQ7QUFHRDtBQVZJLEdBQVA7QUFZRCxDQWRIOztBQWlCQTtrQkFDZWIsVSIsImZpbGUiOiJwYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTVVJIEFuZ3VsYXIgUGFuZWwgQ29tcG9uZW50XG4gKiBAbW9kdWxlIGFuZ3VsYXIvcGFuZWxcbiAqL1xuXG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcblxuXG5jb25zdCBtb2R1bGVOYW1lID0gJ211aS5wYW5lbCc7XG5cblxuYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSwgW10pXG4gIC5kaXJlY3RpdmUoJ211aVBhbmVsJywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjb3BlIDogdHJ1ZSxcbiAgICAgIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cIm11aS1wYW5lbFwiPjwvZGl2PicsXG4gICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHIsIGNvbnRyb2xsZXIsIHRyYW5zY2x1ZGVGbikge1xuICAgICAgICB0cmFuc2NsdWRlRm4oc2NvcGUsIGZ1bmN0aW9uKGNsb25lKSB7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcblxuXG4vKiogRGVmaW5lIG1vZHVsZSBBUEkgKi9cbmV4cG9ydCBkZWZhdWx0IG1vZHVsZU5hbWU7XG4iXX0=
},{"angular":"aeQg5j"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = window.angular;

var _angular2 = babelHelpers.interopRequireDefault(_angular);

var moduleName = 'mui.radio'; /**
                               * MUI Angular Radio Component
                               * @module angular/radio
                               */

_angular2.default.module(moduleName, []).directive('muiRadio', function () {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      label: '@',
      name: '@',
      value: '@',
      ngChecked: '=',
      ngDisabled: '=',
      ngModel: '='
    },
    template: function template(tElement, tAttrs) {
      var isUndef = _angular2.default.isUndefined,
          html = '';

      html += '<div class="mui-radio"><label><input type="radio" ';

      // input attributes
      html += 'name={{name}} ';
      html += 'value={{value}} ';
      html += 'ng-disabled="ngDisabled" ';

      // handle ngChecked and ngModel
      if (!isUndef(tAttrs.ngChecked)) html += 'ng-checked="ngChecked" ';
      if (!isUndef(tAttrs.ngModel)) html += 'ng-model="ngModel" ';

      html += '>{{label}}</label></div>';

      return html;
    }
  };
});

/** Define module API */
exports.default = moduleName;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvLmpzIl0sIm5hbWVzIjpbIm1vZHVsZU5hbWUiLCJtb2R1bGUiLCJkaXJlY3RpdmUiLCJyZXN0cmljdCIsInJlcGxhY2UiLCJzY29wZSIsImxhYmVsIiwibmFtZSIsInZhbHVlIiwibmdDaGVja2VkIiwibmdEaXNhYmxlZCIsIm5nTW9kZWwiLCJ0ZW1wbGF0ZSIsInRFbGVtZW50IiwidEF0dHJzIiwiaXNVbmRlZiIsImlzVW5kZWZpbmVkIiwiaHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0E7Ozs7QUFHQSxJQUFNQSxhQUFhLFdBQW5CLEMsQ0FSQTs7Ozs7QUFXQSxrQkFBUUMsTUFBUixDQUFlRCxVQUFmLEVBQTJCLEVBQTNCLEVBQ0dFLFNBREgsQ0FDYSxVQURiLEVBQ3lCLFlBQVc7QUFDaEMsU0FBTztBQUNMQyxjQUFVLElBREw7QUFFTEMsYUFBUyxJQUZKO0FBR0xDLFdBQU87QUFDTEMsYUFBTyxHQURGO0FBRUxDLFlBQU0sR0FGRDtBQUdMQyxhQUFPLEdBSEY7QUFJTEMsaUJBQVcsR0FKTjtBQUtMQyxrQkFBWSxHQUxQO0FBTUxDLGVBQVM7QUFOSixLQUhGO0FBV0xDLGNBQVUsa0JBQVNDLFFBQVQsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQ25DLFVBQUlDLFVBQVUsa0JBQVFDLFdBQXRCO0FBQUEsVUFDSUMsT0FBTyxFQURYOztBQUdBQSxjQUFRLG9EQUFSOztBQUVBO0FBQ0FBLGNBQVEsZ0JBQVI7QUFDQUEsY0FBUSxrQkFBUjtBQUNBQSxjQUFRLDJCQUFSOztBQUVBO0FBQ0EsVUFBSSxDQUFDRixRQUFRRCxPQUFPTCxTQUFmLENBQUwsRUFBZ0NRLFFBQVEseUJBQVI7QUFDaEMsVUFBSSxDQUFDRixRQUFRRCxPQUFPSCxPQUFmLENBQUwsRUFBOEJNLFFBQVEscUJBQVI7O0FBRTlCQSxjQUFRLDBCQUFSOztBQUVBLGFBQU9BLElBQVA7QUFDRDtBQTdCSSxHQUFQO0FBK0JELENBakNIOztBQW9DQTtrQkFDZWpCLFUiLCJmaWxlIjoicmFkaW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1VSSBBbmd1bGFyIFJhZGlvIENvbXBvbmVudFxuICogQG1vZHVsZSBhbmd1bGFyL3JhZGlvXG4gKi9cblxuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5cblxuY29uc3QgbW9kdWxlTmFtZSA9ICdtdWkucmFkaW8nO1xuXG5cbmFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUsIFtdKVxuICAuZGlyZWN0aXZlKCdtdWlSYWRpbycsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY29wZToge1xuICAgICAgICBsYWJlbDogJ0AnLFxuICAgICAgICBuYW1lOiAnQCcsXG4gICAgICAgIHZhbHVlOiAnQCcsXG4gICAgICAgIG5nQ2hlY2tlZDogJz0nLFxuICAgICAgICBuZ0Rpc2FibGVkOiAnPScsXG4gICAgICAgIG5nTW9kZWw6ICc9J1xuICAgICAgfSxcbiAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbih0RWxlbWVudCwgdEF0dHJzKSB7XG4gICAgICAgIHZhciBpc1VuZGVmID0gYW5ndWxhci5pc1VuZGVmaW5lZCxcbiAgICAgICAgICAgIGh0bWwgPSAnJztcblxuICAgICAgICBodG1sICs9ICc8ZGl2IGNsYXNzPVwibXVpLXJhZGlvXCI+PGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiAnO1xuXG4gICAgICAgIC8vIGlucHV0IGF0dHJpYnV0ZXNcbiAgICAgICAgaHRtbCArPSAnbmFtZT17e25hbWV9fSAnO1xuICAgICAgICBodG1sICs9ICd2YWx1ZT17e3ZhbHVlfX0gJztcbiAgICAgICAgaHRtbCArPSAnbmctZGlzYWJsZWQ9XCJuZ0Rpc2FibGVkXCIgJztcblxuICAgICAgICAvLyBoYW5kbGUgbmdDaGVja2VkIGFuZCBuZ01vZGVsXG4gICAgICAgIGlmICghaXNVbmRlZih0QXR0cnMubmdDaGVja2VkKSkgaHRtbCArPSAnbmctY2hlY2tlZD1cIm5nQ2hlY2tlZFwiICc7XG4gICAgICAgIGlmICghaXNVbmRlZih0QXR0cnMubmdNb2RlbCkpIGh0bWwgKz0gJ25nLW1vZGVsPVwibmdNb2RlbFwiICc7XG5cbiAgICAgICAgaHRtbCArPSAnPnt7bGFiZWx9fTwvbGFiZWw+PC9kaXY+JztcblxuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG5cbi8qKiBEZWZpbmUgbW9kdWxlIEFQSSAqL1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlTmFtZTtcbiJdfQ==
},{"angular":"aeQg5j"}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = window.angular;

var _angular2 = babelHelpers.interopRequireDefault(_angular);

var moduleName = 'mui.row'; /**
                             * MUI Angular Grid/Row Module
                             * @module angular/row.js
                             */

_angular2.default.module('mui.row', []).directive('muiRow', function () {
  return {
    restrict: 'AE',
    scope: true,
    replace: true,
    template: '<div class="mui-row"></div>',
    transclude: true,
    link: function link(scope, element, attr, controller, transcludeFn) {
      transcludeFn(scope, function (clone) {
        element.append(clone);
      });
    }
  };
});

/** Define module API */
exports.default = moduleName;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdy5qcyJdLCJuYW1lcyI6WyJtb2R1bGVOYW1lIiwibW9kdWxlIiwiZGlyZWN0aXZlIiwicmVzdHJpY3QiLCJzY29wZSIsInJlcGxhY2UiLCJ0ZW1wbGF0ZSIsInRyYW5zY2x1ZGUiLCJsaW5rIiwiZWxlbWVudCIsImF0dHIiLCJjb250cm9sbGVyIiwidHJhbnNjbHVkZUZuIiwiY2xvbmUiLCJhcHBlbmQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBOzs7O0FBR0EsSUFBTUEsYUFBYSxTQUFuQixDLENBUkE7Ozs7O0FBV0Esa0JBQVFDLE1BQVIsQ0FBZSxTQUFmLEVBQTBCLEVBQTFCLEVBQ0dDLFNBREgsQ0FDYSxRQURiLEVBQ3VCLFlBQVc7QUFDOUIsU0FBTztBQUNMQyxjQUFVLElBREw7QUFFTEMsV0FBTyxJQUZGO0FBR0xDLGFBQVMsSUFISjtBQUlMQyxjQUFVLDZCQUpMO0FBS0xDLGdCQUFZLElBTFA7QUFNTEMsVUFBTSxjQUFTSixLQUFULEVBQWdCSyxPQUFoQixFQUF5QkMsSUFBekIsRUFBK0JDLFVBQS9CLEVBQTJDQyxZQUEzQyxFQUF5RDtBQUM3REEsbUJBQWFSLEtBQWIsRUFBb0IsVUFBU1MsS0FBVCxFQUFnQjtBQUNsQ0osZ0JBQVFLLE1BQVIsQ0FBZUQsS0FBZjtBQUNELE9BRkQ7QUFHRDtBQVZJLEdBQVA7QUFZRCxDQWRIOztBQWlCQTtrQkFDZWIsVSIsImZpbGUiOiJyb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIE1VSSBBbmd1bGFyIEdyaWQvUm93IE1vZHVsZVxuICogQG1vZHVsZSBhbmd1bGFyL3Jvdy5qc1xuICovXG5cbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuXG5cbmNvbnN0IG1vZHVsZU5hbWUgPSAnbXVpLnJvdyc7XG5cblxuYW5ndWxhci5tb2R1bGUoJ211aS5yb3cnLCBbXSlcbiAgLmRpcmVjdGl2ZSgnbXVpUm93JywgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgc2NvcGU6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwibXVpLXJvd1wiPjwvZGl2PicsXG4gICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHIsIGNvbnRyb2xsZXIsIHRyYW5zY2x1ZGVGbikge1xuICAgICAgICB0cmFuc2NsdWRlRm4oc2NvcGUsIGZ1bmN0aW9uKGNsb25lKSB7XG4gICAgICAgICAgZWxlbWVudC5hcHBlbmQoY2xvbmUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcblxuXG4vKiogRGVmaW5lIG1vZHVsZSBBUEkgKi9cbmV4cG9ydCBkZWZhdWx0IG1vZHVsZU5hbWU7XG4iXX0=
},{"angular":"aeQg5j"}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = window.angular;

var _angular2 = babelHelpers.interopRequireDefault(_angular);

var _forms = require('../js/lib/forms');

var formlib = babelHelpers.interopRequireWildcard(_forms);

var _util = require('../js/lib/util');

var util = babelHelpers.interopRequireWildcard(_util);

var _jqLite = require('../js/lib/jqLite');

var jqLite = babelHelpers.interopRequireWildcard(_jqLite);
/**
 * MUI Angular Select Component
 * @module angular/select
 */

var moduleName = 'mui.select';

_angular2.default.module(moduleName, []).directive('muiSelect', ['$timeout', function ($timeout) {
  return {
    restrict: 'AE',
    require: ['ngModel'],
    scope: {
      label: '@',
      name: '@',
      ngDisabled: '=',
      ngModel: '='
    },
    replace: true,
    transclude: true,
    template: '<div class="mui-select" ' + 'ng-blur="onWrapperBlurOrFocus($event)" ' + 'ng-click="onWrapperClick($event)" ' + 'ng-focus="onWrapperBlurOrFocus($event)" ' + 'ng-keydown="onWrapperKeydown($event)" ' + 'ng-keypress="onWrapperKeypress($event)">' + '<select ' + 'name="{{name}}" ' + 'ng-disabled="ngDisabled" ' + 'ng-model="ngModel" ' + 'ng-mousedown="onInnerMousedown($event)" ' + '>' + '<option ng-repeat="option in options" value="{{option.value}}">{{option.label}}</option>' + '</select>' + '<label>{{label}}</label>' + '<div ' + 'class="mui-select__menu"' + 'ng-show="!useDefault && isOpen"> ' + '<div ' + 'ng-click="chooseOption($event, option)" ' + 'ng-repeat="option in options track by $index" ' + 'ng-class=\'{"mui--is-selected": $index === menuIndex}\'>{{option.label}}</div>' + '</div>' + '</div>',
    link: function link(scope, element, attrs, controller, transcludeFn) {
      var wrapperEl = element,
          menuEl = element.find('div'),
          selectEl = element.find('select'),
          isUndef = _angular2.default.isUndefined,
          cacheIndex;

      // disable MUI js
      selectEl[0]._muiSelect = true;

      // init scope
      scope.options = [];
      scope.isOpen = false;
      scope.useDefault = 'ontouchstart' in document.documentElement ? true : false;
      scope.origTabIndex = selectEl[0].tabIndex;
      scope.menuIndex = 0;
      scope.q = '';
      scope.qTimeout = null;

      // handle `use-default` attribute
      if (!isUndef(attrs.useDefault)) scope.useDefault = true;

      // use tabIndex to make wrapper or inner focusable
      if (scope.useDefault === false) {
        wrapperEl.prop('tabIndex', '0');
        selectEl.prop('tabIndex', '-1');
      } else {
        wrapperEl.prop('tabIndex', '-1');
        selectEl.prop('tabIndex', '0');
      }

      // extract <option> elements from children
      transcludeFn(function (clone) {
        var el, k;

        // iterate through children
        for (k in clone) {
          el = clone[k];

          // add option to scope
          if (el.tagName === 'MUI-OPTION') {
            scope.options.push({
              value: el.getAttribute('value'),
              label: el.getAttribute('label')
            });
          }
        }
      });

      /**
       * Handle blur and focus events on wrapper <div> element.
       * @param {Event} $event - Angular event instance
       */
      scope.onWrapperBlurOrFocus = function ($event) {
        // ignore events that bubbled up
        if (document.activeElement !== wrapperEl[0]) return;

        util.dispatchEvent(selectEl[0], $event.type, false, false);
      };

      /**
       * Handle click event on wrapper <div> element.
       * @param {Event} $event - Angular event instance
       */
      scope.onWrapperClick = function ($event) {
        // only left click, check default prevented and useDefault
        if ($event.button !== 0 || $event.defaultPrevented || scope.useDefault || selectEl[0].disabled) {
          return;
        }

        // focus wrapper
        wrapperEl[0].focus();

        // open custom menu
        scope.isOpen = true;
      };

      /**
       * Handle keydown event on wrapper element.
       * @param {Event} $event - Angular event instance
       */
      scope.onWrapperKeydown = function ($event) {
        // exit if preventDefault() was called or useDefault is true
        if ($event.defaultPrevented || scope.useDefault) return;

        var keyCode = $event.keyCode;

        if (scope.isOpen === false) {
          // spacebar, down, up
          if (keyCode === 32 || keyCode === 38 || keyCode === 40) {
            // prevent win scroll
            $event.preventDefault();

            // open menu
            scope.isOpen = true;
          }
        } else {
          // tab
          if (keyCode === 9) return scope.isOpen = false;

          // escape | up | down | enter
          if (keyCode === 27 || keyCode === 40 || keyCode === 38 || keyCode === 13) {
            $event.preventDefault();
          }

          if (keyCode === 27) {
            // escape -> close
            scope.isOpen = false;
          } else if (keyCode === 40) {
            // up -> increment
            if (scope.menuIndex < scope.options.length - 1) {
              scope.menuIndex += 1;
            }
          } else if (keyCode === 38) {
            // down -> decrement
            if (scope.menuIndex > 0) scope.menuIndex -= 1;
          } else if (keyCode === 13) {
            // enter -> choose and close
            scope.ngModel = scope.options[scope.menuIndex].value;
            scope.isOpen = false;
          }
        }
      };

      /**
       * Handle keypress event on wrapper element.
       * @param {Event} $event - Angular event instance
       */
      scope.onWrapperKeypress = function ($event) {
        // exit if preventDefault() was called or useDefault is true or
        // menu is closed
        if ($event.defaultPrevented || scope.useDefault || !scope.isOpen) {
          return;
        }

        // handle query timer
        clearTimeout(scope.qTimeout);
        scope.q += $event.key;
        scope.qTimeout = setTimeout(function () {
          scope.q = '';
        }, 300);

        // select first match alphabetically
        var prefixRegex = new RegExp('^' + scope.q, 'i'),
            options = scope.options,
            m = options.length,
            i;

        for (i = 0; i < m; i++) {
          if (prefixRegex.test(options[i].label)) {
            scope.menuIndex = i;
            break;
          }
        }
      };

      /**
       * Handle mousedown event on Inner <select> element
       * @param {Event} $event - Angular event instance
       */
      scope.onInnerMousedown = function ($event) {
        // check flag
        if ($event.button !== 0 || scope.useDefault === true) return;

        // prevent built-in menu from opening
        $event.preventDefault();
      };

      /**
       * Choose option the user selected.
       * @param {Object} option - The option selected.
       */
      scope.chooseOption = function ($event, option) {
        // prevent bubbling
        $event.stopImmediatePropagation();

        scope.ngModel = option.value;
        scope.isOpen = false;
      };

      // function to close menu on window resize and document click
      function closeMenuFn() {
        scope.isOpen = false;

        // disable scroll lock
        util.disableScrollLock(true);

        // remove event handlers
        jqLite.off(document, 'click', closeMenuFn);
        jqLite.off(window, 'resize', closeMenuFn);

        scope.$digest();
      }

      /**
       * Open/Close custom select menu
       */
      scope.$watch('isOpen', function (isOpen, oldVal) {
        // ignore first call
        if (isOpen === oldVal) return;

        // exit if use-default is true
        if (scope.useDefault === true) return;

        if (isOpen === true) {
          // enable scroll lock
          util.enableScrollLock();

          // init menuIndex
          var value = scope.ngModel,
              options = scope.options,
              m = options.length,
              i;

          for (i = 0; i < m; i++) {
            if (options[i].value === value) {
              scope.menuIndex = i;
              break;
            }
          }

          menuEl.css({
            height: 'auto',
            visible: 'hidden'
          });

          $timeout(function () {
            // set position of custom menu
            var props = formlib.getMenuPositionalCSS(element[0], menuEl[0], scope.menuIndex);

            props.hidden = 'visible';
            menuEl.css(props);
            jqLite.scrollTop(menuEl[0], props.scrollTop);

            // attach event handlers
            jqLite.on(document, 'click', closeMenuFn);
            jqLite.on(window, 'resize', closeMenuFn);
          });
        } else {
          // focus select element
          selectEl[0].focus();

          // disable scroll lock
          util.disableScrollLock(true);

          // remove event handlers
          jqLite.off(document, 'click', closeMenuFn);
          jqLite.off(window, 'resize', closeMenuFn);
        }
      });

      scope.$watch('ngDisabled', function (newVal) {
        if (newVal === true) wrapperEl.prop('tabIndex', '-1');else if (!scope.useDefault) wrapperEl.prop('tabIndex', '0');
      });
    }
  };
}]);

/** Define module API */
exports.default = moduleName;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJmb3JtbGliIiwidXRpbCIsImpxTGl0ZSIsIm1vZHVsZU5hbWUiLCJtb2R1bGUiLCJkaXJlY3RpdmUiLCIkdGltZW91dCIsInJlc3RyaWN0IiwicmVxdWlyZSIsInNjb3BlIiwibGFiZWwiLCJuYW1lIiwibmdEaXNhYmxlZCIsIm5nTW9kZWwiLCJyZXBsYWNlIiwidHJhbnNjbHVkZSIsInRlbXBsYXRlIiwibGluayIsImVsZW1lbnQiLCJhdHRycyIsImNvbnRyb2xsZXIiLCJ0cmFuc2NsdWRlRm4iLCJ3cmFwcGVyRWwiLCJtZW51RWwiLCJmaW5kIiwic2VsZWN0RWwiLCJpc1VuZGVmIiwiaXNVbmRlZmluZWQiLCJjYWNoZUluZGV4IiwiX211aVNlbGVjdCIsIm9wdGlvbnMiLCJpc09wZW4iLCJ1c2VEZWZhdWx0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJvcmlnVGFiSW5kZXgiLCJ0YWJJbmRleCIsIm1lbnVJbmRleCIsInEiLCJxVGltZW91dCIsInByb3AiLCJjbG9uZSIsImVsIiwiayIsInRhZ05hbWUiLCJwdXNoIiwidmFsdWUiLCJnZXRBdHRyaWJ1dGUiLCJvbldyYXBwZXJCbHVyT3JGb2N1cyIsIiRldmVudCIsImFjdGl2ZUVsZW1lbnQiLCJkaXNwYXRjaEV2ZW50IiwidHlwZSIsIm9uV3JhcHBlckNsaWNrIiwiYnV0dG9uIiwiZGVmYXVsdFByZXZlbnRlZCIsImRpc2FibGVkIiwiZm9jdXMiLCJvbldyYXBwZXJLZXlkb3duIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwib25XcmFwcGVyS2V5cHJlc3MiLCJjbGVhclRpbWVvdXQiLCJrZXkiLCJzZXRUaW1lb3V0IiwicHJlZml4UmVnZXgiLCJSZWdFeHAiLCJtIiwiaSIsInRlc3QiLCJvbklubmVyTW91c2Vkb3duIiwiY2hvb3NlT3B0aW9uIiwib3B0aW9uIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiY2xvc2VNZW51Rm4iLCJkaXNhYmxlU2Nyb2xsTG9jayIsIm9mZiIsIndpbmRvdyIsIiRkaWdlc3QiLCIkd2F0Y2giLCJvbGRWYWwiLCJlbmFibGVTY3JvbGxMb2NrIiwiY3NzIiwiaGVpZ2h0IiwidmlzaWJsZSIsInByb3BzIiwiZ2V0TWVudVBvc2l0aW9uYWxDU1MiLCJoaWRkZW4iLCJzY3JvbGxUb3AiLCJvbiIsIm5ld1ZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0E7Ozs7QUFFQTs7SUFBWUEsTzs7QUFDWjs7SUFBWUMsSTs7QUFDWjs7SUFBWUMsTTtBQVRaOzs7OztBQVlBLElBQU1DLGFBQWEsWUFBbkI7O0FBR0Esa0JBQVFDLE1BQVIsQ0FBZUQsVUFBZixFQUEyQixFQUEzQixFQUNHRSxTQURILENBQ2EsV0FEYixFQUMwQixDQUFDLFVBQUQsRUFBYSxVQUFTQyxRQUFULEVBQW1CO0FBQ3RELFNBQU87QUFDTEMsY0FBVSxJQURMO0FBRUxDLGFBQVMsQ0FBQyxTQUFELENBRko7QUFHTEMsV0FBTztBQUNMQyxhQUFPLEdBREY7QUFFTEMsWUFBTSxHQUZEO0FBR0xDLGtCQUFZLEdBSFA7QUFJTEMsZUFBUztBQUpKLEtBSEY7QUFTTEMsYUFBUyxJQVRKO0FBVUxDLGdCQUFZLElBVlA7QUFXTEMsY0FBVSw2QkFDUix5Q0FEUSxHQUVSLG9DQUZRLEdBR1IsMENBSFEsR0FJUix3Q0FKUSxHQUtSLDBDQUxRLEdBTVIsVUFOUSxHQU9SLGtCQVBRLEdBUVIsMkJBUlEsR0FTUixxQkFUUSxHQVVSLDBDQVZRLEdBV1IsR0FYUSxHQVlSLDBGQVpRLEdBYVIsV0FiUSxHQWNSLDBCQWRRLEdBZVIsT0FmUSxHQWdCUiwwQkFoQlEsR0FpQlIsbUNBakJRLEdBa0JSLE9BbEJRLEdBbUJSLDBDQW5CUSxHQW9CUixnREFwQlEsR0FxQlIsZ0ZBckJRLEdBc0JSLFFBdEJRLEdBdUJSLFFBbENHO0FBbUNMQyxVQUFNLGNBQVNSLEtBQVQsRUFBZ0JTLE9BQWhCLEVBQXlCQyxLQUF6QixFQUFnQ0MsVUFBaEMsRUFBNENDLFlBQTVDLEVBQTBE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SEksQ0FBWjs7QUFNQWlELGtCQUFNRSxNQUFOLEdBQWUsU0FBZjtBQUNBakUsbUJBQU80RCxHQUFQLENBQVdHLEtBQVg7QUFDQXBGLG1CQUFPdUYsU0FBUCxDQUFpQmxFLE9BQU8sQ0FBUCxDQUFqQixFQUE0QitELE1BQU1HLFNBQWxDOztBQUVBO0FBQ0F2RixtQkFBT3dGLEVBQVAsQ0FBVXpELFFBQVYsRUFBb0IsT0FBcEIsRUFBNkIwQyxXQUE3QjtBQUNBekUsbUJBQU93RixFQUFQLENBQVVaLE1BQVYsRUFBa0IsUUFBbEIsRUFBNEJILFdBQTVCO0FBQ0QsV0FmRDtBQWlCRCxTQXZDRCxNQXVDTztBQUNMO0FBQ0FsRCxtQkFBUyxDQUFULEVBQVlnQyxLQUFaOztBQUVBO0FBQ0F4RCxlQUFLMkUsaUJBQUwsQ0FBdUIsSUFBdkI7O0FBRUE7QUFDQTFFLGlCQUFPMkUsR0FBUCxDQUFXNUMsUUFBWCxFQUFxQixPQUFyQixFQUE4QjBDLFdBQTlCO0FBQ0F6RSxpQkFBTzJFLEdBQVAsQ0FBV0MsTUFBWCxFQUFtQixRQUFuQixFQUE2QkgsV0FBN0I7QUFDRDtBQUNGLE9BekREOztBQTJEQWxFLFlBQU11RSxNQUFOLENBQWEsWUFBYixFQUEyQixVQUFTVyxNQUFULEVBQWlCO0FBQzFDLFlBQUlBLFdBQVcsSUFBZixFQUFxQnJFLFVBQVVrQixJQUFWLENBQWUsVUFBZixFQUEyQixJQUEzQixFQUFyQixLQUNLLElBQUksQ0FBQy9CLE1BQU11QixVQUFYLEVBQXVCVixVQUFVa0IsSUFBVixDQUFlLFVBQWYsRUFBMkIsR0FBM0I7QUFDN0IsT0FIRDtBQUlEO0FBdFRJLEdBQVA7QUF3VEQsQ0F6VHVCLENBRDFCOztBQTZUQTtrQkFDZXJDLFUiLCJmaWxlIjoic2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNVUkgQW5ndWxhciBTZWxlY3QgQ29tcG9uZW50XG4gKiBAbW9kdWxlIGFuZ3VsYXIvc2VsZWN0XG4gKi9cblxuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5cbmltcG9ydCAqIGFzIGZvcm1saWIgZnJvbSAnLi4vanMvbGliL2Zvcm1zJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi4vanMvbGliL3V0aWwnO1xuaW1wb3J0ICogYXMganFMaXRlIGZyb20gJy4uL2pzL2xpYi9qcUxpdGUnO1xuXG5cbmNvbnN0IG1vZHVsZU5hbWUgPSAnbXVpLnNlbGVjdCc7XG5cblxuYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSwgW10pXG4gIC5kaXJlY3RpdmUoJ211aVNlbGVjdCcsIFsnJHRpbWVvdXQnLCBmdW5jdGlvbigkdGltZW91dCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIHJlcXVpcmU6IFsnbmdNb2RlbCddLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgbGFiZWw6ICdAJyxcbiAgICAgICAgbmFtZTogJ0AnLFxuICAgICAgICBuZ0Rpc2FibGVkOiAnPScsXG4gICAgICAgIG5nTW9kZWw6ICc9J1xuICAgICAgfSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwibXVpLXNlbGVjdFwiICcgK1xuICAgICAgICAnbmctYmx1cj1cIm9uV3JhcHBlckJsdXJPckZvY3VzKCRldmVudClcIiAnICtcbiAgICAgICAgJ25nLWNsaWNrPVwib25XcmFwcGVyQ2xpY2soJGV2ZW50KVwiICcgK1xuICAgICAgICAnbmctZm9jdXM9XCJvbldyYXBwZXJCbHVyT3JGb2N1cygkZXZlbnQpXCIgJyArXG4gICAgICAgICduZy1rZXlkb3duPVwib25XcmFwcGVyS2V5ZG93bigkZXZlbnQpXCIgJyArXG4gICAgICAgICduZy1rZXlwcmVzcz1cIm9uV3JhcHBlcktleXByZXNzKCRldmVudClcIj4nICtcbiAgICAgICAgJzxzZWxlY3QgJyArXG4gICAgICAgICduYW1lPVwie3tuYW1lfX1cIiAnICtcbiAgICAgICAgJ25nLWRpc2FibGVkPVwibmdEaXNhYmxlZFwiICcgK1xuICAgICAgICAnbmctbW9kZWw9XCJuZ01vZGVsXCIgJyArXG4gICAgICAgICduZy1tb3VzZWRvd249XCJvbklubmVyTW91c2Vkb3duKCRldmVudClcIiAnICtcbiAgICAgICAgJz4nICtcbiAgICAgICAgJzxvcHRpb24gbmctcmVwZWF0PVwib3B0aW9uIGluIG9wdGlvbnNcIiB2YWx1ZT1cInt7b3B0aW9uLnZhbHVlfX1cIj57e29wdGlvbi5sYWJlbH19PC9vcHRpb24+JyArXG4gICAgICAgICc8L3NlbGVjdD4nICtcbiAgICAgICAgJzxsYWJlbD57e2xhYmVsfX08L2xhYmVsPicgK1xuICAgICAgICAnPGRpdiAnICtcbiAgICAgICAgJ2NsYXNzPVwibXVpLXNlbGVjdF9fbWVudVwiJyArXG4gICAgICAgICduZy1zaG93PVwiIXVzZURlZmF1bHQgJiYgaXNPcGVuXCI+ICcgK1xuICAgICAgICAnPGRpdiAnICtcbiAgICAgICAgJ25nLWNsaWNrPVwiY2hvb3NlT3B0aW9uKCRldmVudCwgb3B0aW9uKVwiICcgK1xuICAgICAgICAnbmctcmVwZWF0PVwib3B0aW9uIGluIG9wdGlvbnMgdHJhY2sgYnkgJGluZGV4XCIgJyArXG4gICAgICAgICduZy1jbGFzcz1cXCd7XCJtdWktLWlzLXNlbGVjdGVkXCI6ICRpbmRleCA9PT0gbWVudUluZGV4fVxcJz57e29wdGlvbi5sYWJlbH19PC9kaXY+JyArXG4gICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgJzwvZGl2PicsXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGNvbnRyb2xsZXIsIHRyYW5zY2x1ZGVGbikge1xuICAgICAgICB2YXIgd3JhcHBlckVsID0gZWxlbWVudCxcbiAgICAgICAgICAgIG1lbnVFbCA9IGVsZW1lbnQuZmluZCgnZGl2JyksXG4gICAgICAgICAgICBzZWxlY3RFbCA9IGVsZW1lbnQuZmluZCgnc2VsZWN0JyksXG4gICAgICAgICAgICBpc1VuZGVmID0gYW5ndWxhci5pc1VuZGVmaW5lZCxcbiAgICAgICAgICAgIGNhY2hlSW5kZXg7XG5cbiAgICAgICAgLy8gZGlzYWJsZSBNVUkganNcbiAgICAgICAgc2VsZWN0RWxbMF0uX211aVNlbGVjdCA9IHRydWU7XG5cbiAgICAgICAgLy8gaW5pdCBzY29wZVxuICAgICAgICBzY29wZS5vcHRpb25zID0gW107XG4gICAgICAgIHNjb3BlLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICBzY29wZS51c2VEZWZhdWx0ID0gKCdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgXG4gICAgICAgICAgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHNjb3BlLm9yaWdUYWJJbmRleCA9IHNlbGVjdEVsWzBdLnRhYkluZGV4O1xuICAgICAgICBzY29wZS5tZW51SW5kZXggPSAwO1xuICAgICAgICBzY29wZS5xID0gJyc7XG4gICAgICAgIHNjb3BlLnFUaW1lb3V0ID0gbnVsbDtcblxuICAgICAgICAvLyBoYW5kbGUgYHVzZS1kZWZhdWx0YCBhdHRyaWJ1dGVcbiAgICAgICAgaWYgKCFpc1VuZGVmKGF0dHJzLnVzZURlZmF1bHQpKSBzY29wZS51c2VEZWZhdWx0ID0gdHJ1ZTtcblxuICAgICAgICAvLyB1c2UgdGFiSW5kZXggdG8gbWFrZSB3cmFwcGVyIG9yIGlubmVyIGZvY3VzYWJsZVxuICAgICAgICBpZiAoc2NvcGUudXNlRGVmYXVsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB3cmFwcGVyRWwucHJvcCgndGFiSW5kZXgnLCAnMCcpO1xuICAgICAgICAgIHNlbGVjdEVsLnByb3AoJ3RhYkluZGV4JywgJy0xJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd3JhcHBlckVsLnByb3AoJ3RhYkluZGV4JywgJy0xJyk7XG4gICAgICAgICAgc2VsZWN0RWwucHJvcCgndGFiSW5kZXgnLCAnMCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXh0cmFjdCA8b3B0aW9uPiBlbGVtZW50cyBmcm9tIGNoaWxkcmVuXG4gICAgICAgIHRyYW5zY2x1ZGVGbihmdW5jdGlvbihjbG9uZSkge1xuICAgICAgICAgIHZhciBlbCwgaztcblxuICAgICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBjaGlsZHJlblxuICAgICAgICAgIGZvciAoayBpbiBjbG9uZSkge1xuICAgICAgICAgICAgZWwgPSBjbG9uZVtrXTtcblxuICAgICAgICAgICAgLy8gYWRkIG9wdGlvbiB0byBzY29wZVxuICAgICAgICAgICAgaWYgKGVsLnRhZ05hbWUgPT09ICdNVUktT1BUSU9OJykge1xuICAgICAgICAgICAgICBzY29wZS5vcHRpb25zLnB1c2goe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBlbC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyksXG4gICAgICAgICAgICAgICAgbGFiZWw6IGVsLmdldEF0dHJpYnV0ZSgnbGFiZWwnKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhhbmRsZSBibHVyIGFuZCBmb2N1cyBldmVudHMgb24gd3JhcHBlciA8ZGl2PiBlbGVtZW50LlxuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSAkZXZlbnQgLSBBbmd1bGFyIGV2ZW50IGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBzY29wZS5vbldyYXBwZXJCbHVyT3JGb2N1cyA9IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIC8vIGlnbm9yZSBldmVudHMgdGhhdCBidWJibGVkIHVwXG4gICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHdyYXBwZXJFbFswXSkgcmV0dXJuO1xuXG4gICAgICAgICAgdXRpbC5kaXNwYXRjaEV2ZW50KHNlbGVjdEVsWzBdLCAkZXZlbnQudHlwZSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgfTtcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGUgY2xpY2sgZXZlbnQgb24gd3JhcHBlciA8ZGl2PiBlbGVtZW50LlxuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSAkZXZlbnQgLSBBbmd1bGFyIGV2ZW50IGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBzY29wZS5vbldyYXBwZXJDbGljayA9IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIC8vIG9ubHkgbGVmdCBjbGljaywgY2hlY2sgZGVmYXVsdCBwcmV2ZW50ZWQgYW5kIHVzZURlZmF1bHRcbiAgICAgICAgICBpZiAoJGV2ZW50LmJ1dHRvbiAhPT0gMCB8fFxuICAgICAgICAgICAgICAkZXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fFxuICAgICAgICAgICAgICBzY29wZS51c2VEZWZhdWx0IHx8XG4gICAgICAgICAgICAgIHNlbGVjdEVsWzBdLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gZm9jdXMgd3JhcHBlclxuICAgICAgICAgIHdyYXBwZXJFbFswXS5mb2N1cygpO1xuXG4gICAgICAgICAgLy8gb3BlbiBjdXN0b20gbWVudVxuICAgICAgICAgIHNjb3BlLmlzT3BlbiA9IHRydWU7XG4gICAgICAgIH07XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlIGtleWRvd24gZXZlbnQgb24gd3JhcHBlciBlbGVtZW50LlxuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSAkZXZlbnQgLSBBbmd1bGFyIGV2ZW50IGluc3RhbmNlXG4gICAgICAgICAqL1xuICAgICAgICBzY29wZS5vbldyYXBwZXJLZXlkb3duID0gZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgLy8gZXhpdCBpZiBwcmV2ZW50RGVmYXVsdCgpIHdhcyBjYWxsZWQgb3IgdXNlRGVmYXVsdCBpcyB0cnVlXG4gICAgICAgICAgaWYgKCRldmVudC5kZWZhdWx0UHJldmVudGVkIHx8IHNjb3BlLnVzZURlZmF1bHQpIHJldHVybjtcblxuICAgICAgICAgIHZhciBrZXlDb2RlID0gJGV2ZW50LmtleUNvZGU7XG5cbiAgICAgICAgICBpZiAoc2NvcGUuaXNPcGVuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gc3BhY2ViYXIsIGRvd24sIHVwXG4gICAgICAgICAgICBpZiAoa2V5Q29kZSA9PT0gMzIgfHwga2V5Q29kZSA9PT0gMzggfHwga2V5Q29kZSA9PT0gNDApIHtcbiAgICAgICAgICAgICAgLy8gcHJldmVudCB3aW4gc2Nyb2xsXG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgIC8vIG9wZW4gbWVudVxuICAgICAgICAgICAgICBzY29wZS5pc09wZW4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHRhYlxuICAgICAgICAgICAgaWYgKGtleUNvZGUgPT09IDkpIHJldHVybiBzY29wZS5pc09wZW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gZXNjYXBlIHwgdXAgfCBkb3duIHwgZW50ZXJcbiAgICAgICAgICAgIGlmIChrZXlDb2RlID09PSAyNyBcbiAgICAgICAgICAgICAgICB8fCBrZXlDb2RlID09PSA0MFxuICAgICAgICAgICAgICAgIHx8IGtleUNvZGUgPT09IDM4XG4gICAgICAgICAgICAgICAgfHwga2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgICAvLyBlc2NhcGUgLT4gY2xvc2VcbiAgICAgICAgICAgICAgc2NvcGUuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICAgIC8vIHVwIC0+IGluY3JlbWVudFxuICAgICAgICAgICAgICBpZiAoc2NvcGUubWVudUluZGV4IDwgc2NvcGUub3B0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUubWVudUluZGV4ICs9IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gMzgpIHtcbiAgICAgICAgICAgICAgLy8gZG93biAtPiBkZWNyZW1lbnRcbiAgICAgICAgICAgICAgaWYgKHNjb3BlLm1lbnVJbmRleCA+IDApIHNjb3BlLm1lbnVJbmRleCAtPSAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgICAvLyBlbnRlciAtPiBjaG9vc2UgYW5kIGNsb3NlXG4gICAgICAgICAgICAgIHNjb3BlLm5nTW9kZWwgPSBzY29wZS5vcHRpb25zW3Njb3BlLm1lbnVJbmRleF0udmFsdWU7ICBcbiAgICAgICAgICAgICAgc2NvcGUuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlIGtleXByZXNzIGV2ZW50IG9uIHdyYXBwZXIgZWxlbWVudC5cbiAgICAgICAgICogQHBhcmFtIHtFdmVudH0gJGV2ZW50IC0gQW5ndWxhciBldmVudCBpbnN0YW5jZVxuICAgICAgICAgKi9cbiAgICAgICAgc2NvcGUub25XcmFwcGVyS2V5cHJlc3MgPSBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAvLyBleGl0IGlmIHByZXZlbnREZWZhdWx0KCkgd2FzIGNhbGxlZCBvciB1c2VEZWZhdWx0IGlzIHRydWUgb3JcbiAgICAgICAgICAvLyBtZW51IGlzIGNsb3NlZFxuICAgICAgICAgIGlmICgkZXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCBzY29wZS51c2VEZWZhdWx0IHx8ICFzY29wZS5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBoYW5kbGUgcXVlcnkgdGltZXJcbiAgICAgICAgICBjbGVhclRpbWVvdXQoc2NvcGUucVRpbWVvdXQpO1xuICAgICAgICAgIHNjb3BlLnEgKz0gJGV2ZW50LmtleTtcbiAgICAgICAgICBzY29wZS5xVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7c2NvcGUucSA9ICcnO30sIDMwMCk7XG5cbiAgICAgICAgICAvLyBzZWxlY3QgZmlyc3QgbWF0Y2ggYWxwaGFiZXRpY2FsbHlcbiAgICAgICAgICB2YXIgcHJlZml4UmVnZXggPSBuZXcgUmVnRXhwKCdeJyArIHNjb3BlLnEsICdpJyksXG4gICAgICAgICAgICAgIG9wdGlvbnMgPSBzY29wZS5vcHRpb25zLFxuICAgICAgICAgICAgICBtID0gb3B0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgICAgIGk7XG5cbiAgICAgICAgICBmb3IgKGk9MDsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgaWYgKHByZWZpeFJlZ2V4LnRlc3Qob3B0aW9uc1tpXS5sYWJlbCkpIHtcbiAgICAgICAgICAgICAgc2NvcGUubWVudUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlIG1vdXNlZG93biBldmVudCBvbiBJbm5lciA8c2VsZWN0PiBlbGVtZW50XG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR9ICRldmVudCAtIEFuZ3VsYXIgZXZlbnQgaW5zdGFuY2VcbiAgICAgICAgICovXG4gICAgICAgIHNjb3BlLm9uSW5uZXJNb3VzZWRvd24gPSBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAvLyBjaGVjayBmbGFnXG4gICAgICAgICAgaWYgKCRldmVudC5idXR0b24gIT09IDAgfHwgc2NvcGUudXNlRGVmYXVsdCA9PT0gdHJ1ZSkgcmV0dXJuO1xuXG4gICAgICAgICAgLy8gcHJldmVudCBidWlsdC1pbiBtZW51IGZyb20gb3BlbmluZ1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENob29zZSBvcHRpb24gdGhlIHVzZXIgc2VsZWN0ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb24gLSBUaGUgb3B0aW9uIHNlbGVjdGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgc2NvcGUuY2hvb3NlT3B0aW9uID0gZnVuY3Rpb24oJGV2ZW50LCBvcHRpb24pIHtcbiAgICAgICAgICAvLyBwcmV2ZW50IGJ1YmJsaW5nXG4gICAgICAgICAgJGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgc2NvcGUubmdNb2RlbCA9IG9wdGlvbi52YWx1ZTtcbiAgICAgICAgICBzY29wZS5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgXG5cbiAgICAgICAgLy8gZnVuY3Rpb24gdG8gY2xvc2UgbWVudSBvbiB3aW5kb3cgcmVzaXplIGFuZCBkb2N1bWVudCBjbGlja1xuICAgICAgICBmdW5jdGlvbiBjbG9zZU1lbnVGbigpIHtcbiAgICAgICAgICBzY29wZS5pc09wZW4gPSBmYWxzZTtcblxuICAgICAgICAgIC8vIGRpc2FibGUgc2Nyb2xsIGxvY2tcbiAgICAgICAgICB1dGlsLmRpc2FibGVTY3JvbGxMb2NrKHRydWUpO1xuXG4gICAgICAgICAgLy8gcmVtb3ZlIGV2ZW50IGhhbmRsZXJzXG4gICAgICAgICAganFMaXRlLm9mZihkb2N1bWVudCwgJ2NsaWNrJywgY2xvc2VNZW51Rm4pO1xuICAgICAgICAgIGpxTGl0ZS5vZmYod2luZG93LCAncmVzaXplJywgY2xvc2VNZW51Rm4pO1xuXG4gICAgICAgICAgc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICB9XG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogT3Blbi9DbG9zZSBjdXN0b20gc2VsZWN0IG1lbnVcbiAgICAgICAgICovXG4gICAgICAgIHNjb3BlLiR3YXRjaCgnaXNPcGVuJywgZnVuY3Rpb24oaXNPcGVuLCBvbGRWYWwpIHtcbiAgICAgICAgICAvLyBpZ25vcmUgZmlyc3QgY2FsbFxuICAgICAgICAgIGlmIChpc09wZW4gPT09IG9sZFZhbCkgcmV0dXJuO1xuXG4gICAgICAgICAgLy8gZXhpdCBpZiB1c2UtZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgICAgaWYgKHNjb3BlLnVzZURlZmF1bHQgPT09IHRydWUpIHJldHVybjtcblxuICAgICAgICAgIGlmIChpc09wZW4gPT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBzY3JvbGwgbG9ja1xuICAgICAgICAgICAgdXRpbC5lbmFibGVTY3JvbGxMb2NrKCk7XG5cbiAgICAgICAgICAgIC8vIGluaXQgbWVudUluZGV4XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzY29wZS5uZ01vZGVsLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBzY29wZS5vcHRpb25zLFxuICAgICAgICAgICAgICAgIG0gPSBvcHRpb25zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBpO1xuXG4gICAgICAgICAgICBmb3IgKGk9MDsgaSA8IG07IGkrKykge1xuICAgICAgICAgICAgICBpZiAob3B0aW9uc1tpXS52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzY29wZS5tZW51SW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lbnVFbC5jc3Moe1xuICAgICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgdmlzaWJsZTogJ2hpZGRlbidcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgLy8gc2V0IHBvc2l0aW9uIG9mIGN1c3RvbSBtZW51XG4gICAgICAgICAgICAgIHZhciBwcm9wcyA9IGZvcm1saWIuZ2V0TWVudVBvc2l0aW9uYWxDU1MoXG4gICAgICAgICAgICAgICAgZWxlbWVudFswXSxcbiAgICAgICAgICAgICAgICBtZW51RWxbMF0sXG4gICAgICAgICAgICAgICAgc2NvcGUubWVudUluZGV4XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBwcm9wcy5oaWRkZW4gPSAndmlzaWJsZSc7XG4gICAgICAgICAgICAgIG1lbnVFbC5jc3MocHJvcHMpO1xuICAgICAgICAgICAgICBqcUxpdGUuc2Nyb2xsVG9wKG1lbnVFbFswXSwgcHJvcHMuc2Nyb2xsVG9wKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIGF0dGFjaCBldmVudCBoYW5kbGVyc1xuICAgICAgICAgICAgICBqcUxpdGUub24oZG9jdW1lbnQsICdjbGljaycsIGNsb3NlTWVudUZuKTtcbiAgICAgICAgICAgICAganFMaXRlLm9uKHdpbmRvdywgJ3Jlc2l6ZScsIGNsb3NlTWVudUZuKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGZvY3VzIHNlbGVjdCBlbGVtZW50XG4gICAgICAgICAgICBzZWxlY3RFbFswXS5mb2N1cygpO1xuXG4gICAgICAgICAgICAvLyBkaXNhYmxlIHNjcm9sbCBsb2NrXG4gICAgICAgICAgICB1dGlsLmRpc2FibGVTY3JvbGxMb2NrKHRydWUpO1xuXG4gICAgICAgICAgICAvLyByZW1vdmUgZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgICAgIGpxTGl0ZS5vZmYoZG9jdW1lbnQsICdjbGljaycsIGNsb3NlTWVudUZuKTtcbiAgICAgICAgICAgIGpxTGl0ZS5vZmYod2luZG93LCAncmVzaXplJywgY2xvc2VNZW51Rm4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2NvcGUuJHdhdGNoKCduZ0Rpc2FibGVkJywgZnVuY3Rpb24obmV3VmFsKSB7XG4gICAgICAgICAgaWYgKG5ld1ZhbCA9PT0gdHJ1ZSkgd3JhcHBlckVsLnByb3AoJ3RhYkluZGV4JywgJy0xJyk7XG4gICAgICAgICAgZWxzZSBpZiAoIXNjb3BlLnVzZURlZmF1bHQpIHdyYXBwZXJFbC5wcm9wKCd0YWJJbmRleCcsICcwJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG5cbi8qKiBEZWZpbmUgbW9kdWxlIEFQSSAqL1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlTmFtZTtcbiJdfQ==
},{"../js/lib/forms":3,"../js/lib/jqLite":4,"../js/lib/util":5,"angular":"aeQg5j"}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = window.angular;

var _angular2 = babelHelpers.interopRequireDefault(_angular);

var _jqLite = require('../js/lib/jqLite');

var jqLite = babelHelpers.interopRequireWildcard(_jqLite);
/**
 * MUI Angular Tabs Component
 * @module angular/tabs
 */

var moduleName = 'mui.tabs';

_angular2.default.module(moduleName, []).directive('muiTabs', function () {
  return {
    restrict: 'EA',
    transclude: true,
    scope: {
      selectedId: '=?selected',
      onChange: '&?'
    },
    template: '' + '<ul ' + 'class="mui-tabs__bar" ' + 'ng-class=\'{"mui-tabs__bar--justified": justified}\'>' + '<li ' + 'ng-repeat="tab in tabs track by $index" ' + 'ng-class=\'{"mui--is-active": $index === selectedId}\'>' + '<a ng-click="onClick($index)">{{tab.label}}</a>' + '</li>' + '</ul>',
    controller: ['$scope', function ($scope) {
      var counter = 0;

      // init scope
      $scope.tabs = [];

      // add tab
      this.addTab = function (args) {
        // user counter for tab id
        var tabId = counter;
        counter += 1;

        // update tabs list
        $scope.tabs.push({ label: args.label });

        // handle active tabs
        if (args.isActive) $scope.selectedId = tabId;

        // return id
        return tabId;
      };
    }],
    link: function link(scope, element, attrs, ctrl, transcludeFn) {
      var isUndef = _angular2.default.isUndefined;

      // init scope
      if (isUndef(scope.selectedId)) scope.selectedId = 0;
      scope.justified = false;

      // justified
      if (!isUndef(attrs.justified)) scope.justified = true;

      // click handler
      scope.onClick = function (tabId) {
        // check current tab
        if (tabId === scope.selectedId) return;

        // update active tab
        scope.selectedId = tabId;

        // execute onChange callback
        if (scope.onChange) scope.$$postDigest(scope.onChange);
      };

      // use transcludeFn to pass ng-controller on parent element
      transcludeFn(scope, function (clone) {
        element.append(clone);
      });
    }
  };
}).directive('muiTab', ['$parse', function ($parse) {
  return {
    require: '^?muiTabs',
    restrict: 'AE',
    scope: {
      active: '&?',
      label: '@?'
    },
    transclude: true,
    template: '<div ' + 'class="mui-tabs__pane" ' + 'ng-class=\'{"mui--is-active": tabId === $parent.selectedId}\'></div>',
    link: function link(scope, element, attrs, ctrl, transcludeFn) {
      var onSelectFn = $parse(attrs.onSelect),
          onDeselectFn = $parse(attrs.onDeselect),
          origScope = scope.$parent.$parent;

      // init scope
      scope.tabId = null;

      // add to parent controller
      if (ctrl) {
        scope.tabId = ctrl.addTab({
          label: scope.label,
          isActive: Boolean(scope.active)
        });
      }

      // use transcludeFn to pass ng-controller on parent element
      transcludeFn(scope, function (clone) {
        element.find('div').append(clone);
      });

      scope.$parent.$watch('selectedId', function (newVal, oldVal) {
        // ignore initial load
        if (newVal === oldVal) return;

        // execute onSelect
        if (newVal === scope.tabId) onSelectFn(origScope);

        // execute onDeselect
        if (oldVal === scope.tabId) onDeselectFn(origScope);
      });
    }
  };
}]);

/** Define module API */
exports.default = moduleName;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMuanMiXSwibmFtZXMiOlsianFMaXRlIiwibW9kdWxlTmFtZSIsIm1vZHVsZSIsImRpcmVjdGl2ZSIsInJlc3RyaWN0IiwidHJhbnNjbHVkZSIsInNjb3BlIiwic2VsZWN0ZWRJZCIsIm9uQ2hhbmdlIiwidGVtcGxhdGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiY291bnRlciIsInRhYnMiLCJhZGRUYWIiLCJhcmdzIiwidGFiSWQiLCJwdXNoIiwibGFiZWwiLCJpc0FjdGl2ZSIsImxpbmsiLCJlbGVtZW50IiwiYXR0cnMiLCJjdHJsIiwidHJhbnNjbHVkZUZuIiwiaXNVbmRlZiIsImlzVW5kZWZpbmVkIiwianVzdGlmaWVkIiwib25DbGljayIsIiQkcG9zdERpZ2VzdCIsImNsb25lIiwiYXBwZW5kIiwiJHBhcnNlIiwicmVxdWlyZSIsImFjdGl2ZSIsIm9uU2VsZWN0Rm4iLCJvblNlbGVjdCIsIm9uRGVzZWxlY3RGbiIsIm9uRGVzZWxlY3QiLCJvcmlnU2NvcGUiLCIkcGFyZW50IiwiQm9vbGVhbiIsImZpbmQiLCIkd2F0Y2giLCJuZXdWYWwiLCJvbGRWYWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBOzs7O0FBRUE7O0lBQVlBLE07QUFQWjs7Ozs7QUFVQSxJQUFNQyxhQUFhLFVBQW5COztBQUdBLGtCQUFRQyxNQUFSLENBQWVELFVBQWYsRUFBMkIsRUFBM0IsRUFDR0UsU0FESCxDQUNhLFNBRGIsRUFDd0IsWUFBVztBQUMvQixTQUFPO0FBQ0xDLGNBQVUsSUFETDtBQUVMQyxnQkFBWSxJQUZQO0FBR0xDLFdBQU87QUFDTEMsa0JBQVksWUFEUDtBQUVMQyxnQkFBVTtBQUZMLEtBSEY7QUFPTEMsY0FBVSxLQUNSLE1BRFEsR0FFUix3QkFGUSxHQUdSLHVEQUhRLEdBSVIsTUFKUSxHQUtSLDBDQUxRLEdBTVIseURBTlEsR0FPUixpREFQUSxHQVFSLE9BUlEsR0FTUixPQWhCRztBQWlCTEMsZ0JBQVksQ0FBQyxRQUFELEVBQVcsVUFBU0MsTUFBVCxF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Qm1CLFdBQVdJLFNBQVg7O0FBRTVCO0FBQ0EsWUFBSU0sV0FBV3ZDLE1BQU1VLEtBQXJCLEVBQTRCcUIsYUFBYUUsU0FBYjtBQUM3QixPQVREO0FBVUQ7QUExQ0ksR0FBUDtBQTRDRCxDQTdDb0IsQ0F0RXZCOztBQXNIQTtrQkFDZXRDLFUiLCJmaWxlIjoidGFicy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTVVJIEFuZ3VsYXIgVGFicyBDb21wb25lbnRcbiAqIEBtb2R1bGUgYW5ndWxhci90YWJzXG4gKi9cblxuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5cbmltcG9ydCAqIGFzIGpxTGl0ZSBmcm9tICcuLi9qcy9saWIvanFMaXRlJztcblxuXG5jb25zdCBtb2R1bGVOYW1lID0gJ211aS50YWJzJztcblxuXG5hbmd1bGFyLm1vZHVsZShtb2R1bGVOYW1lLCBbXSlcbiAgLmRpcmVjdGl2ZSgnbXVpVGFicycsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0VBJyxcbiAgICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgICBzY29wZToge1xuICAgICAgICBzZWxlY3RlZElkOiAnPT9zZWxlY3RlZCcsXG4gICAgICAgIG9uQ2hhbmdlOiAnJj8nXG4gICAgICB9LFxuICAgICAgdGVtcGxhdGU6ICcnICtcbiAgICAgICAgJzx1bCAnICtcbiAgICAgICAgJ2NsYXNzPVwibXVpLXRhYnNfX2JhclwiICcgK1xuICAgICAgICAnbmctY2xhc3M9XFwne1wibXVpLXRhYnNfX2Jhci0tanVzdGlmaWVkXCI6IGp1c3RpZmllZH1cXCc+JyArXG4gICAgICAgICc8bGkgJyArXG4gICAgICAgICduZy1yZXBlYXQ9XCJ0YWIgaW4gdGFicyB0cmFjayBieSAkaW5kZXhcIiAnICtcbiAgICAgICAgJ25nLWNsYXNzPVxcJ3tcIm11aS0taXMtYWN0aXZlXCI6ICRpbmRleCA9PT0gc2VsZWN0ZWRJZH1cXCc+JyArXG4gICAgICAgICc8YSBuZy1jbGljaz1cIm9uQ2xpY2soJGluZGV4KVwiPnt7dGFiLmxhYmVsfX08L2E+JyArXG4gICAgICAgICc8L2xpPicgK1xuICAgICAgICAnPC91bD4nLFxuICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCBmdW5jdGlvbigkc2NvcGUpIHtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuXG4gICAgICAgIC8vIGluaXQgc2NvcGVcbiAgICAgICAgJHNjb3BlLnRhYnMgPSBbXTtcblxuICAgICAgICAvLyBhZGQgdGFiXG4gICAgICAgIHRoaXMuYWRkVGFiID0gZnVuY3Rpb24oYXJncykge1xuICAgICAgICAgIC8vIHVzZXIgY291bnRlciBmb3IgdGFiIGlkXG4gICAgICAgICAgdmFyIHRhYklkID0gY291bnRlcjtcbiAgICAgICAgICBjb3VudGVyICs9IDE7XG5cbiAgICAgICAgICAvLyB1cGRhdGUgdGFicyBsaXN0XG4gICAgICAgICAgJHNjb3BlLnRhYnMucHVzaCh7bGFiZWw6IGFyZ3MubGFiZWx9KTtcblxuICAgICAgICAgIC8vIGhhbmRsZSBhY3RpdmUgdGFic1xuICAgICAgICAgIGlmIChhcmdzLmlzQWN0aXZlKSAkc2NvcGUuc2VsZWN0ZWRJZCA9IHRhYklkO1xuXG4gICAgICAgICAgLy8gcmV0dXJuIGlkXG4gICAgICAgICAgcmV0dXJuIHRhYklkO1xuICAgICAgICB9O1xuICAgICAgfV0sXG4gICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmwsIHRyYW5zY2x1ZGVGbikge1xuICAgICAgICB2YXIgaXNVbmRlZiA9IGFuZ3VsYXIuaXNVbmRlZmluZWQ7XG5cbiAgICAgICAgLy8gaW5pdCBzY29wZVxuICAgICAgICBpZiAoaXNVbmRlZihzY29wZS5zZWxlY3RlZElkKSkgc2NvcGUuc2VsZWN0ZWRJZCA9IDA7XG4gICAgICAgIHNjb3BlLmp1c3RpZmllZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIGp1c3RpZmllZFxuICAgICAgICBpZiAoIWlzVW5kZWYoYXR0cnMuanVzdGlmaWVkKSkgc2NvcGUuanVzdGlmaWVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBjbGljayBoYW5kbGVyXG4gICAgICAgIHNjb3BlLm9uQ2xpY2sgPSBmdW5jdGlvbih0YWJJZCkge1xuICAgICAgICAgIC8vIGNoZWNrIGN1cnJlbnQgdGFiXG4gICAgICAgICAgaWYgKHRhYklkID09PSBzY29wZS5zZWxlY3RlZElkKSByZXR1cm47XG5cbiAgICAgICAgICAvLyB1cGRhdGUgYWN0aXZlIHRhYlxuICAgICAgICAgIHNjb3BlLnNlbGVjdGVkSWQgPSB0YWJJZDtcblxuICAgICAgICAgIC8vIGV4ZWN1dGUgb25DaGFuZ2UgY2FsbGJhY2tcbiAgICAgICAgICBpZiAoc2NvcGUub25DaGFuZ2UpIHNjb3BlLiQkcG9zdERpZ2VzdChzY29wZS5vbkNoYW5nZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gdXNlIHRyYW5zY2x1ZGVGbiB0byBwYXNzIG5nLWNvbnRyb2xsZXIgb24gcGFyZW50IGVsZW1lbnRcbiAgICAgICAgdHJhbnNjbHVkZUZuKHNjb3BlLCBmdW5jdGlvbihjbG9uZSkge1xuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGNsb25lKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSlcbiAgLmRpcmVjdGl2ZSgnbXVpVGFiJywgWyckcGFyc2UnLCBmdW5jdGlvbigkcGFyc2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVxdWlyZTogJ14/bXVpVGFicycsXG4gICAgICByZXN0cmljdDogJ0FFJyxcbiAgICAgIHNjb3BlOiB7XG4gICAgICAgIGFjdGl2ZTogJyY/JyxcbiAgICAgICAgbGFiZWw6ICdAPydcbiAgICAgIH0sXG4gICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgdGVtcGxhdGU6ICc8ZGl2ICcgK1xuICAgICAgICAnY2xhc3M9XCJtdWktdGFic19fcGFuZVwiICcgK1xuICAgICAgICAnbmctY2xhc3M9XFwne1wibXVpLS1pcy1hY3RpdmVcIjogdGFiSWQgPT09ICRwYXJlbnQuc2VsZWN0ZWRJZH1cXCc+PC9kaXY+JyxcbiAgICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCwgdHJhbnNjbHVkZUZuKSB7XG4gICAgICAgIHZhciBvblNlbGVjdEZuID0gJHBhcnNlKGF0dHJzLm9uU2VsZWN0KSxcbiAgICAgICAgICAgIG9uRGVzZWxlY3RGbiA9ICRwYXJzZShhdHRycy5vbkRlc2VsZWN0KSxcbiAgICAgICAgICAgIG9yaWdTY29wZSA9IHNjb3BlLiRwYXJlbnQuJHBhcmVudDtcblxuICAgICAgICAvLyBpbml0IHNjb3BlXG4gICAgICAgIHNjb3BlLnRhYklkID0gbnVsbDtcblxuICAgICAgICAvLyBhZGQgdG8gcGFyZW50IGNvbnRyb2xsZXJcbiAgICAgICAgaWYgKGN0cmwpIHtcbiAgICAgICAgICBzY29wZS50YWJJZCA9IGN0cmwuYWRkVGFiKHtcbiAgICAgICAgICAgIGxhYmVsOiBzY29wZS5sYWJlbCxcbiAgICAgICAgICAgIGlzQWN0aXZlOiBCb29sZWFuKHNjb3BlLmFjdGl2ZSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVzZSB0cmFuc2NsdWRlRm4gdG8gcGFzcyBuZy1jb250cm9sbGVyIG9uIHBhcmVudCBlbGVtZW50XG4gICAgICAgIHRyYW5zY2x1ZGVGbihzY29wZSwgZnVuY3Rpb24oY2xvbmUpIHtcbiAgICAgICAgICBlbGVtZW50LmZpbmQoJ2RpdicpLmFwcGVuZChjbG9uZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNjb3BlLiRwYXJlbnQuJHdhdGNoKCdzZWxlY3RlZElkJywgZnVuY3Rpb24obmV3VmFsLCBvbGRWYWwpIHtcbiAgICAgICAgICAvLyBpZ25vcmUgaW5pdGlhbCBsb2FkXG4gICAgICAgICAgaWYgKG5ld1ZhbCA9PT0gb2xkVmFsKSByZXR1cm47XG5cbiAgICAgICAgICAvLyBleGVjdXRlIG9uU2VsZWN0XG4gICAgICAgICAgaWYgKG5ld1ZhbCA9PT0gc2NvcGUudGFiSWQpIG9uU2VsZWN0Rm4ob3JpZ1Njb3BlKTtcblxuICAgICAgICAgIC8vIGV4ZWN1dGUgb25EZXNlbGVjdFxuICAgICAgICAgIGlmIChvbGRWYWwgPT09IHNjb3BlLnRhYklkKSBvbkRlc2VsZWN0Rm4ob3JpZ1Njb3BlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfV0pO1xuXG5cbi8qKiBEZWZpbmUgbW9kdWxlIEFQSSAqL1xuZXhwb3J0IGRlZmF1bHQgbW9kdWxlTmFtZTtcbiJdfQ==
},{"../js/lib/jqLite":4,"angular":"aeQg5j"}]},{},[1])