import { createServer } from "http";
import { readFileCustom } from "./helpers/read-helper.js";
import { writeFileCustom } from "./helpers/write-helper.js";
import { sign, verify } from "./helpers/jwt-helper.js";

const options = {
  "Content-type": "application/json",
};
const PORT = 2024;

const server = createServer((req, res) => {
  const method = req.method;
  const url = req.url.split("/")[1];

  if (method == "POST") {
    if (url == "sign-in") {
      req.on("data", (chunk) => {
        const { username, password } = JSON.parse(chunk);

        const user = readFileCustom("users.json").find(
          (el) => el.username == username && el.password == password
        );

        const accessToken = sign({ id: user.id });

        if (user) {
          if (user.accessToken) {
            user.accessToken = accessToken;
            const allUsers = readFileCustom("users.json");
            const userIndex = allUsers.findIndex((e) => e.id == user.id);
            allUsers.splice(userIndex, 1);
            allUsers.push(user);

            writeFileCustom("users.json", allUsers);
          } else {
						user.accessToken = accessToken;
            const allUsers = readFileCustom("users.json");
            const userIndex = allUsers.findIndex((e) => e.id == user.id);
            allUsers.splice(userIndex, 1);
            allUsers.push(user);

            writeFileCustom("users.json", allUsers);
          }
        } else {
          res.writeHead(401, options);
          res.end(
            JSON.stringify({
              message: "Unauthorized",
            })
          );
          return;
        }
				res.writeHead(200, options)
				res.end(JSON.stringify({
					message: "Success",
					accessToken
				}))
				return
      });
			return
    }
		if(url == 'sign-out') {
			const accessToken = req.headers['authorization']
			const {id} = verify(accessToken)
			const user = readFileCustom('users.json').find(e => e.id == id)
			if(!user) {
				res.writeHead(401, options)
				res.end(JSON.stringify({
					message: "Unauthorized"
				}))
				return
			}
			if(user.accessToken) {
				delete user.accessToken

				const allUsers = readFileCustom('users.json')
				const userIndex = allUsers.findIndex(e => e.id == user.id)
				allUsers.splice(userIndex, 1)
				allUsers.push(user)

				writeFileCustom('users.json', allUsers)
			}
			res.writeHead(200, options)
			res.end(JSON.stringify({
				message: "Successfully signed out"
			}))
			return
		}
  }
  if (method == "GET") {
  }
});

server.listen(PORT, console.log("waiting ..."));
