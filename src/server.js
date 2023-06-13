import fs from "fs";
import { createServer } from "http";
const PORT = 8000

const server = createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  if (method == "GET") {
    const book = fs.readFileSync(
      `${process.cwd()}/src/data/book.json`,
      "utf-8"
    );
    const data = JSON.parse(book);

    res.writeHead(200, {
      Accept: "application/json",
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify(data));
    return;
  }

  if (method == "POST") {
    req.on("data", (chunk) => {
      const body = JSON.parse(chunk);

      const books = JSON.parse(
        fs.readFileSync("./src/data/book.json", "utf-8")
      );

      books.push({
        id: books.at(-1)?.id + 1 || 1,
        ...body,
      });
      fs.writeFileSync("./src/data/book.json", JSON.stringify(books, null, 4));
    });
    res.end("Book created");
    return;
  }

  if (method == "PATCH") {
    const bookId = url.split("/")[1];

    req.on("data", (chunk) => {
      const body = JSON.parse(chunk);

      const allBooks = JSON.parse(fs.readFileSync("./src/data/book.json"));
      const book = allBooks.find((e) => e.id == bookId);

      book.title = body.title;

      const bookIndex = allBooks.findIndex((el) => el.id == bookId);
      allBooks.splice(bookIndex, 1);

      allBooks.push(book);

      fs.writeFileSync(
        "./src/data/book.json",
        JSON.stringify(allBooks, null, 4)
      );
    });
    res.end("Object updated");
  }

  if (method == "DELETE") {
    const bookId = url.split("/")[1];

    const allBooks = fs.readFileSync("./src/data/book.json");

    const bookIndex = allBooks.findIndex((el) => el.id == bookId);
    allBooks.splice(bookIndex, 1);

    fs.writeFileSync("./src/data/book.json", JSON.stringify(allBooks, null, 4));

    res.end("Object deleted");
  }
});

server.listen(PORT, console.log("Ok"));
