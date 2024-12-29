"use strict";

const nums = [5, 4, 7, 3, 9];

function asyncMap(array, transformer, callback) {
  let results = [];
  let completed = 0;

  for (let i = 0; i < array.length; i++) {
    transformer(array[i], i, array, (result) => {
      results[i] = result;
      completed++;

      if (completed === array.length) {
        callback(null, results); 
      }
    });
  }
}

const squareF = (data, index, array, cb) => {
  setTimeout(() => {
    cb(data * data);
  }, 500);
};

asyncMap(nums, squareF, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Result:", result); 
  }
});