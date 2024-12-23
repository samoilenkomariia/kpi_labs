"use strict";

const data = [
  { id: 1, value: "item1" },
  { id: 2, value: "item2" },
  { id: 3, value: "item3" },
];

const data2 = [
  [1, 2],
  [2, 3],
  [4, 5],
  [5, 6],
];

const fetchData = async function* (data) {
  for (const item of data) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield item;
  }
};

const processData = async (data) => {
  const dataGenerator = fetchData(data);
  for await (const item of dataGenerator) {
    console.log("Processing:", item);
  }
};

processData(data);
processData(data2);
