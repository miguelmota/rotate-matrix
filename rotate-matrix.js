(function(root) {
  'use strict';

  function rotateMatrix(m, n) {
    if (!(Array.isArray(m) && m.length > 0)) {
      return [];
    } else if (typeof n !== 'number') {
      n = 1;
    } else if (n === 0) {
      return m;
    } else {
      n = n % 4;
    }

    var prevMt, mt;
    prevMt = mt = m;

    while (n !== 0) {
      mt = [];

      for (var i = 0, cl = prevMt.length; i < cl; i++) {
        for (var j = 0, rl = prevMt[i].length; j < rl; j++) {
          if (cl !== rl) {
            return [];
          }

          mt[i] = mt[i] || [];
          mt[i][j] = prevMt[j][i];
        }

        if (n > 0) {
          mt[i] = mt[i].reverse();
        }
      }

      if (n < 0) {
        mt.reverse();
        n++;
      }
      else {
        n--;
      }
      
      prevMt = mt;
    }

    return mt;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = rotateMatrix;
    }
    exports.rotateMatrix = rotateMatrix;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return rotateMatrix;
    });
  } else {
    root.rotateMatrix = rotateMatrix;
  }

})(this);
