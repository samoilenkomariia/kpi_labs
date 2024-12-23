"use strict";

const fetchData = async function* () {
  const data = [
    { id: 1, value: "item1" },
    { id: 2, value: "item2" },
    { id: 3, value: "item3" },
  ];

  for (const item of data) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield item;
  }
};

const processData = async () => {
  const dataGenerator = fetchData();
  for await (const item of dataGenerator) {
    console.log("Processing:", item);
  }
};

processData();
