"use strict";

const nums = [5, 4, "sd", 3, 9];

function asyncMap(array, transformer, callback) {
  let results = [];
  let completed = 0;
  let isErr = false;

  for (let i = 0; i < array.length; i++) {
    try {
      transformer(array[i], i, array, (result, error) => {
        if (isErr) return;

        if (error) {
          isErr = true;
          callback(null, error);
          return;
        }

        results[i] = result;
        completed++;

        if (completed === array.length) {
          callback(results);
        }
      });
    } catch (err) {
      if (!isErr) {
        isErr = true;
        callback(null, err);
      }
    }
  }
}

const squareF = (data, index, array, cb) => {
  setTimeout(() => {
    if (typeof data === "number") {
      cb(null, new Error(`incorrect datatype ${index}`));
    } else {
      cb(data * data);
    }
  }, 500);
};

asyncMap(nums, squareF, (result, error) => {
  if (error) {
    console.error("Error:", error.message);
  } else {
    console.log("Result:", result);
  }
});
