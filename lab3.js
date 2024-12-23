"use strict";

const nums = [5, 2, 7, 3, 4];

const asyncMap = (array, ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const promises = array.map((item) => squareNums(item));

      Promise.all(promises).then(resolve).catch(reject);
    }, ms);
  });
};

const squareNums = (num) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(num * num), 1000);
  });
};

//promise based use case
asyncMap(nums, 100).then((result) => console.log(result));

//async await based use case
(async () => {
  const result = await asyncMap(nums, 100);
  console.log(result);
})();