"use strict";

const nums = [5, 2, 7, 3, 4];

// console.log(nums.map((x) => x * x)); ф-ція яку я обрала

const asyncMap = (
  //асинхронна реалізація array.map(x => x*x)
  array, //масив цифр nums
  callback, //підставлятиметься ф-ція для обчислення num*num
  finishingCallback, //фінальний колбек який викликається в самому кінці для виводу result
  delay, //int число мілісекунд для затримки
  onError = console.error
) => {
  const result = [];
  let completed = 0; //для контролю обходу по масиву

  for (const [index, item] of array.entries()) {
    const startTime = Date.now();

    callback(item, (error, value) => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = delay - elapsedTime;

      if (error) {
        onError(error, item);
        result[index] = null;
        completed++;
        if (completed === array.length) finishingCallback(result);
        return;
      }
      const handleResult = () => {
        result[index] = value;
        completed++;
        if (completed === array.length) finishingCallback(result);
      };
      if (remainingTime > 0) {
        setTimeout(handleResult, 100); //support for debounce(additional executing delay)
      } else handleResult();
    });
  }
};

const squareNums = (num, done) => {
  setTimeout(() => {
    done(null, num * num);
  }, 50);
};

//demo for debounce with no errors
asyncMap(
  nums,
  squareNums,
  (result) => console.log(result),
  100,
  (error, item) => console.error(`Error on item ${item}`, error.message)
);

//demo for error handling
asyncMap(
  nums,
  (num, done) => {
    setTimeout(() => {
      num === 7
        ? done(new Error("Failed on num 7"), null) //simulate an error on item 7
        : done(null, num * num);
    }, 50);
  },
  (result) => console.log(result),
  100,
  (error, item) => error.message
);
