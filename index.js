const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const { start } = require("node:repl");

const connection = mysql.createConnection({
  host: "localhost",

  port: 3306,
  user: "root",
  password: "Peterabbit88!",
  database: "employees_db",
});

connection.connect((err) => {
  if (err) throw err;

  console.log("Connected", connection.threadId);
  start();
});

function start() {
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      name: "options",
      choices: [
        "View All Employees",
        "View All Employees By Department",
        "View All Employees By Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
      ],
    },
  ]);
}

// const start = () => {
//   inquirer
//     .prompt({
//       name: "readInfo",
//       type: "message",
//       message:
//         "Type READ to see what the employees database looks like, type WRITE to add data to the database.",
//     })
//     .then((answer) => {
//       console.log(answer);
//       console.log(answer.readInfo);

//       if (answer.readInfo === "READ") {
//         connection.query("SELECT * FROM employees", (err, results) => {
//           if (err) throw err;
//           console.log(results);
//         });
//         connection.end();
//       } else if (answer.readInfo === "WRITE") {
//         connection.query(
//           "INSERT INTO products SET ?",
//           {
//             // product_name: "",
//             // product_price: "",
//           },
//           (err) => {
//             if (err) throw err;

//             start();
//           }
//         );
//       } else {
//         console.log("PLEASE TYPE IN READ!");
//         start();
//       }
//     });
// };
