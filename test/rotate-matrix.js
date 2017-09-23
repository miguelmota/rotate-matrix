const test = require('tape');
const rotateMatrix = require('../rotate-matrix');

test('rotateMatrix', function (t) {
  'use strict';

  t.plan(12);

  t.deepEqual(rotateMatrix(), []);
  t.deepEqual(rotateMatrix(''), []);
  t.deepEqual(rotateMatrix([]), []);

  t.deepEqual(rotateMatrix([
    [1,2,3],
    [5,6],
    [7,8,9]
  ]), []);

  t.deepEqual(rotateMatrix([
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]), [
    [7,4,1],
    [8,5,2],
    [9,6,3]
  ]);

  t.deepEqual(rotateMatrix([
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ], 1), [
    [7,4,1],
    [8,5,2],
    [9,6,3]
  ]);

  t.deepEqual(rotateMatrix([
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ], 2), [
    [9,8,7],
    [6,5,4],
    [3,2,1]
  ]);

  t.deepEqual(rotateMatrix([
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ], 3), [
    [3,6,9],
    [2,5,8],
    [1,4,7]
  ]);

  t.deepEqual(rotateMatrix([
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ], -3), [
    [7,4,1],
    [8,5,2],
    [9,6,3]
  ]);

  t.deepEqual(rotateMatrix([
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ], 4), [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]);

  t.deepEqual(rotateMatrix([
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ], -1), [
    [3,6,9],
    [2,5,8],
    [1,4,7]
  ]);

  t.deepEqual(rotateMatrix([
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ], -2), [
    [9,8,7],
    [6,5,4],
    [3,2,1]
  ]);
});
