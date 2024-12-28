"use strict";

const nums = [5, 2, 7, "sa", "sd"];

// console.log(nums.map((x) => x * x)); ф-ція яку я обрала
function asyncMap(array, squareF, callback, delay) {
  let results = [];
  let completed = 0;

  for (let i = 0; i < array.length; i++) {
    try {
      if (typeof array[i] === "number") {
        results[i] = squareF(array[i]);
        completed++;
        if (completed === array.length) callback(null, results);
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

asyncMap(
  nums,
  (x) => x * x,
  (err, result) => {
    if (err) {
      console.error("Error:", err);
    } else {
      console.log("Result:", result);
    }
  },
  500
);
