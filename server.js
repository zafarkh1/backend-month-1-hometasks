// import fs from "fs";

// fs.mkdir(
//   `./data/${new Date().getFullYear()}`,
//   { recursive: true },
//   (err, data) => {
//     if (err) throw err;

//     fs.mkdir(
//       `./data/${new Date().getFullYear()}/${new Date().getMonth() + 1}`,
//       { recursive: true },
//       (error, datas) => {
//         if (error) throw error;

//         fs.mkdir(
//           `./data/${new Date().getFullYear()}/${
//             new Date().getMonth() + 1
//           }/${new Date().getDate()}`,
//           { recursive: true },
//           (er, dat) => {
//             if (er) throw er;

//             fs.mkdirSync(
//               `./data/${new Date().getFullYear()}/${
//                 new Date().getMonth() + 1
//               }/${new Date().getDate()}/'Developer.txt'`
//             );
//           }
//         );
//       }
//     );
//   }
// );
