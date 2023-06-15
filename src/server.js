import http from "http";
import { log } from "console";
import { readFile, writeFile } from "./helpers/fs.js";
import { sign, verify } from "./helpers/jwt.js";

const PORT = 9000;

const server = http.createServer(async (req, res) => {
  const method = req.method;
  const url = req.url;
	let token = req.headers.authorization 

	if(method == "GET") {
		if (url == '/account') {
			let userId = await verify(token)
			let users = await readFile('users')
			let user = userId.find(el => el.id == userId)
			if(user) {
				res.end(JSON.stringify(user))
			} else {
				res.end('Token is wrong')
			}
		}
	}

  if (method == "POST") {
    if (url == "/register") {
      let body = {};
      req.on("data", (chunk) => {
        body = JSON.parse(chunk);
      });
      let users = await readFile("infos");
      const checkUser = users.find((el) => el.username == body.username);

      if (checkUser) {
        res.end("User has been taken");
        return;
      }

      let user = {
        id: users.at(-1)?.id + 1 || 1,
        username: body.username,
        password: body.password,
      };
      let token = await sign(user.id);
      if (token) {
        users.push(user);
        await writeFile("infos", users);
      }
      res.end(token);
    }
    if (url == "/login") {
			let body = {};
      req.on("data", (chunk) => {
        body = JSON.parse(chunk);
      });
      let users = await readFile("infos");
      const user = users.find(
        (el) => el.username == body.username && el.password == body.password
      );

			if(user) {
				return res.end(await sign(user.id))
			} else {
				return res.end('Login or password is wrong')
			}

    }
  }
});

server.listen(PORT, log("listening ..."));
