"use strict";

const nums = [5, 2, 7, "sa", "sd"];
const nums2 = [5, 4, 7, 3, 9];

// console.log(nums.map((x) => x * x)); ф-ція яку я обрала
function asyncMap(array, transformer, callback, delay) {
  let results = [];
  let completed = 0;
  let isErr = false;

  if (completed === array.length) {
    callback(results);
    return;
  }
  for (let i = 0; i < array.length; i++) {
    if (isErr) return;
    if (typeof array[i] !== "number") {
      return callback(new Error(`${array[i]} is NaN`), null);
    }

    transformer(array[i], i, array, (err, result) => {
      if (err) {
        isErr = true;
        return callback(err);
      }

      results[i] = result;
      completed++;

      if (completed === array.length) callback(null, results);
    });
    setTimeout(() => {}, delay);
  }
}

const squareF = (data, index, array, cb) => {
  setTimeout(() => {
    cb(null, data * data);
  }, 500);
};

asyncMap(
  nums,
  squareF,
  (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Result:", result);
    }
  },
  500
);
