"use strict";

const nums = [5, 2, 7, 3, 4];

const controller = new AbortController();
const { signal } = controller;

const asyncMap = (array, ms, signal) => {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(new Error("asyncMap aborted"));
      return;
    }
    const promises = array.map((item) => squareNums(item, signal));

    Promise.all(promises)
      .then(resolve)
      .catch((error) => {
        if (signal?.aborted) {
          reject(new Error("asyncMap aborted"));
        } else {
          reject(error);
        }
      });

    setTimeout(() => {}, ms);
  });
};

const squareNums = (num, signal) => {
  return new Promise((resolve, reject) => {
    const timeoutID = setTimeout(() => {
      if (signal?.aborted) {
        reject(new Error("squareNums aborted"));
      }
      resolve(num * num);
    }, 1000);

    signal?.addEventListener("abort", () => {
      clearTimeout(timeoutID);
      reject(new Error("squareNums aborted"));
    });
  });
};

setTimeout(() => controller.abort(), 500);

//promise based use case
asyncMap(nums, 100, signal)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));

// //async await based use case
// (async () => {
//   const result = await asyncMap(nums, 100);
//   console.log(result);
// })();
