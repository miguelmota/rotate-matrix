# rotate-matrix

> Rotate a matrix in either direction.

# Install

```bash
npm install rotate-matrix
```

```bash
bower install rotate-matrix
```

# Usage

```javascript
var rotateMatrix = require('rotate-matrix');

// 90° clockwise rotation (default)
console.log(rotateMatrix([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]));

/*
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
*/

// 180° clockwise rotation
console.log(rotateMatrix([
  [1,2,3],
  [4,5,6],
  [7,8,9]
], 2));

/*
[
  [9,8,7],
  [6,5,4],
  [3,2,1]
]
*/

// 360° clockwise rotation
console.log(rotateMatrix([
  [1,2,3],
  [4,5,6],
  [7,8,9]
], 4));

/*
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
*/

// 90° counter-clockwise rotation
console.log(rotateMatrix([
  [1,2,3],
  [4,5,6],
  [7,8,9]
], -1));

/*
[
  [3,6,9],
  [2,5,8],
  [1,4,7]
]
*/

// 180° counter-clockwise rotation
console.log(rotateMatrix([
  [1,2,3],
  [4,5,6],
  [7,8,9]
], -2));

/*
[
  [9,8,7],
  [6,5,4],
  [3,2,1]
]
*/
```

# Test

```bash
npm test
```

# License

MIT
