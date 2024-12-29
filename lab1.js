"use strict";

const nums = [5, 2, 7, "sa", "sd"];
const nums2 = [5, 4, 7, 3, 9];

// console.log(nums.map((x) => x * x)); ф-ція яку я обрала
function asyncMap(array, transformer, callback, delay) {
  let results = [];
  let completed = 0;

  for (let i = 0; i < array.length; i++) {
    try {
      if (typeof array[i] === "number") {
        transformer(array[i], (err, result) => {
          if (err) {
            callback(err);
            return;
          }
          results[i] = result;
          completed++;

          if (completed === array.length) {
            callback(null, results);
          }
        });
      } else {
        throw new Error(`${array[i]} is NaN`);
      }
    } catch (err) {
      callback(err);
      return;
    }
    setTimeout(() => {}, delay);
  }
}

const squareF = (data, callback) => {
  try {
    callback(null, data * data);
  } catch (err) {
    callabck(err);
  }
};

asyncMap(
  nums2,
  squareF,
  (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log("Result:", result);
    }
  },
  500
);
