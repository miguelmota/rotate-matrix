(function(root) {
  'use strict';

  function rotateMatrix(m, n) {
    if (!(Array.isArray(m) && m.length > 0)) {
      return [];
    } else if (typeof n !== 'number') {
      n = 1;
    } else if (n === 0) {
      return m;
    }

    var mt = [];

    for (var i = 0, cl = m.length; i < cl; i++) {
      for (var j = 0, rl = m[i].length; j < rl; j++) {
        if (cl !== rl) {
          return [];
        }

        mt[i] = mt[i] || [];
        mt[i][j] = m[j][i];
      }

      if (n > 0) {
        mt[i] = mt[i].reverse();
      }
    }

    if (n < 0) {
      mt.reverse();
    }

    while(n > 0 ? n-- : n++) {
      mt = rotateMatrix(mt, n);
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
