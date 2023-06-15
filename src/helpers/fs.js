import fs from "fs";
import path from "path";

const readFile = async (fileName) => {
  return JSON.parse(fs.readFileSync(path.join(process.cwd(), "src", "data", `${fileName}.json`)
  ))
};

const writeFile = async (fileName, data) => {
  return fs.writeFileSync(
    path.join(
      process.cwd(),
      "src",
      "data",
      `${fileName}.json`,
      JSON.stringify(data, null, 4)
    )
  );
};

export {readFile, writeFile}