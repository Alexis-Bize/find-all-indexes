# Find all indexes
### What is this?
**Find all indexes** allows you to find all occurrences of a unique or multiple characters in a string or in an array (Buffer included).

### How-to use
ES6:
```javascript
import findAllIndexes from 'find-all-indexes'

const myString = 'kayak';
const myArray = ['k', 'a', 'y', 'a', 'k'];
const myBuffer = new Buffer([107, 97, 121, 97, 107]); // kayak

console.log(
    findAllIndexes(myString, 'a'),
    // [ 1, 3 ]
    findAllIndexes(myString, ['a', 'k']),
    // [ 1, 3, 0, 4 ]
    findAllIndexes(myString, ['a', 'k'], {
        sort: true
    }),
    // [ 0, 1, 3, 4 ]
    findAllIndexes(myArray, 'y'),
    // [ 2 ]
    findAllIndexes(myBuffer, ['6B', '61'], {
        hex: true,
        sort: true
    })
    // [ 0, 1, 3, 4 ]
);
```
ES5:
```javascript
var findAllIndexes = require('find-all-indexes').default;

var myString = 'kayak';
var myArray = ['k', 'a', 'y', 'a', 'k'];
var myBuffer = new Buffer([107, 97, 121, 97, 107]); // kayak

...
```

### Want to contribute?
Feel free to open a pull request on [GitHub](https://github.com/Alexis-Bize/find-all-indexes)!

### Licence
MIT