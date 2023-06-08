const http = require("http");
const data = require("./data");

http
  .createServer((request, response) => {
    const method = request.method;
    const url = request.url;
    const football = url.split("/")[1];
    const country = url.split("/")[2];
    const clubId = url.split("/")[3];

    if (method === "GET") {
      if (football === "football") {
        if (!country) {
          response.end(JSON.stringify(data));
          return;
        }
        if (!clubId) {
          const countries = data[0][country];
          if (!countries) {
            response.writeHead(404, {
              "Content-type": "application/json",
            });
            response.end(
              JSON.stringify({
                status: 404,
                message: "Country not found",
              })
            );
          }
          response.end(JSON.stringify(countries));
          return;
        }
        const club = data[0][country].find((e) => e.id == clubId);
        if (!club) {
          response.writeHead(404, {
            "Content-type": "application/json",
          });
          response.end(
            JSON.stringify({
              status: 404,
              message: "Club not found",
            })
          );
        }
        response.writeHead(200, {
          "Content-type": "application/json",
        });
        response.end(JSON.stringify(club));
        return;
      }
      response.writeHead(404, {
        "Content-type": "application/json",
      });
      response.end(
        JSON.stringify({
          status: 404,
          message: "Endpoint not found",
        })
      );
    } else {
      response.end("modification method");
    }
  })
  .listen(3000, () => {
    console.log("listening ...");
  });