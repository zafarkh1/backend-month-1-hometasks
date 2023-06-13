import fs from "fs";
import { createServer } from "http";
const PORT = 8000;

const server = createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  if (method == "GET") {
    const product = fs.readFileSync(
      `${process.cwd()}/src/data/product.json`,
      "utf-8"
    );
    const market = fs.readFileSync(
      `${process.cwd()}/src/data/market.json`,
      "utf-8"
    );
    const dataPr = JSON.parse(product);
    const dataMa = JSON.parse(market);

    res.writeHead(200, {
      Accept: "application/json",
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(dataMa));
    return;
  }

  if (method == "POST") {
    req.on("data", (chunk) => {
      const body = JSON.parse(chunk);

      const market = fs.readFileSync(
        `${process.cwd()}/src/data/market.json`,
        "utf-8"
      );
      const dataMa = JSON.parse(market);

      dataMa.push({
        id: books.at(-1)?.id + 1 || 1,
        ...body,
      });
      fs.writeFileSync(
        "./src/data/market.json",
        JSON.stringify(dataMa, null, 4)
      );
    });
    res.end(JSON.stringify(dataMa));

    return;
  }

  if (method == "PATCH") {
    req.on("data", (chunk) => {
      const body = JSON.parse(chunk);
    });
    res.end("Object updated");
  }
});

server.listen(PORT, console.log("Ok"));
