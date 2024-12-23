"use strict";

const data = [
  { id: 1, value: "item1" },
  { id: 2, value: "item2" },
  { id: 3, value: "item3" },
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

//using generator to read file content line by line

const fs = require("fs");
const readline = require("readline");

const fetchDataFromFile = async function* (filePath) {
  try {
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({ input: fileStream });

    try {
      for await (const line of rl) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        yield JSON.parse(line);
      }
    } finally {
      fileStream.close();
    }
  } catch (error) {
    console.error("Error reading file:", error.message);
  }
};

const processDataFromFile = async (filePath) => {
  const dataGenerator = fetchDataFromFile(filePath);
  for await (const item of dataGenerator) {
    console.log("Processing:", item);
  }
};

processDataFromFile("example.jsonl");
