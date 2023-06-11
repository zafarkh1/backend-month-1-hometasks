import http from "http";
import data from "./data.js";

const PORT = 9000;

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  const options = {
    "Content-Type": "application/json",
  };

  if (method == "GET") {
    res.writeHead(200, options);
    res.end(JSON.stringify(data));
    return;
  }

  if (method == "POST") {
    req.on("data", (chunck) => {
      const body = JSON.parse(chunck);
      data.push({
        id: data.at(-1)?.id + 1 || 1,
        ...body,
      });
      res.writeHead(201, options);
      res.end(
        JSON.stringify({
          message: "Object created",
        })
      );
    });
    return;
  }

  if (method == "PATCH") {
    const productId = url.split("/")[1];
    if (!productId) {
      res.writeHead(404, options);
      res.end(
        JSON.stringify({
          message: "Not found",
        })
      );
      return;
    }

    const product = data.find((e) => e.id == productId);

    if (!product) {
      res.writeHead(404, options);
      res.end(
        JSON.stringify({
          message: "Product not found",
        })
      );
      return;
    }

    req.on("data", (chunck) => {
      const { name, price } = JSON.parse(chunck);
      product.name = name ?? product.name;
      product.price = price ?? product.price;

      const productIndex = data.findIndex((e) => e.id == productId);

      data.splice(productIndex, 1);
      data.push(product);

      res.writeHead(201, options);
      res.end(
        JSON.stringify({
          message: "Object updated",
        })
      );
    });
    return;
  }

  if (method == "DELETE") {
    const productId = url.split("/")[1];
    if (!productId) {
      res.writeHead(404, options);
      res.end(
        JSON.stringify({
          message: "Not found",
        })
      );
    }
    const product = data.find((e) => e.id == productId);

    if (!product) {
      res.writeHead(404, options);
      res.end(
        JSON.stringify({
          message: "Product not found",
        })
      );
    }

    const productIndex = data.findIndex((e) => e.id == productId);

    data.splice(productIndex, 1);

    res.writeHead(204, options);
    res.end(
      JSON.stringify({
        message: "Object deleted",
      })
    );
    return;
  }
});

server.listen(PORT, () => {
  console.log("listening ...");
});
