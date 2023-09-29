import fs from "fs";

const generateTxtFile = (data: string) => {
  fs.writeFile("output.txt", data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
};

generateTxtFile("Hello World!");
