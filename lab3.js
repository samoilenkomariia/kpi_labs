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
    setTimeout(() => {
      const promises = array.map((item) => squareNums(item));

      Promise.all(promises).then(resolve).catch(reject);
    }, ms);
  });
};

const squareNums = (num, signal) => {
  return new Promise((resolve) => {
    const timeoutID = setTimeout(() => {
      if (signal?.aborted) reject(new Error("squareNum aborted"));
      else resolve(num * num);
    }, 1000);

    signal?.addEventListener("abort", () => {
      clearTimeout(timeoutID);
      reject(new Error("squareNum aborted"));
    });
  });
};

setTimeout(() => controller.abort(), 500);

//promise based use case
asyncMap(nums, 100)
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));

// //async await based use case
// (async () => {
//   const result = await asyncMap(nums, 100);
//   console.log(result);
// })();
