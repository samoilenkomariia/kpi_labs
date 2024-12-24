"use strict";

const nums = [5, 2, "df", 3, 4];

const asyncMap = (array, ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const promises = array.map((item) => squareNums(item));

      Promise.all(promises).then(resolve).catch(reject);
    }, ms);
  });
};

const squareNums = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") resolve(num * num);
      else
        reject(new Error(`Error on  item ${num}, probably invalid datatype`));
    }, 1000);
  });
};

//promise based use case
asyncMap(nums, 100).then((result) => console.log(result));

//async await based use case
(async () => {
  const result = await asyncMap(nums, 100);
  console.log(result);
})();

//add support for parallelism
const asyncMapWithParallelism = (array, ms, limit = array.length) => {
  return new Promise((resolve) => {
    const result = [];
    let activeTasks = 0; //num of active tasks
    let index = 0; //track the next item to process

    const processNext = () => {
      if (result.length === array.length && !activeTasks) {
        resolve(result); //if finished going through array resolve
        return;
      }
      while (activeTasks < limit && index < array.length) {
        const currentIndex = index++;
        activeTasks++;

        squareNums(array[currentIndex])
          .then((value) => {
            result[currentIndex] = value;
          })
          .catch((error) => {
            result[currentIndex] = null;
            console.error(error.message);
          })
          .finally(() => {
            activeTasks--;
            processNext();
          });
      }
    };

    setTimeout(processNext, ms);
  });
};

(async () => {
  const result = await asyncMapWithParallelism(nums, 100, 2);
  console.log(result);
})();
