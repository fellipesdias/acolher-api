import mysql from "mysql";

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Marcelinha@2021",
});

con.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

con.query("SELECT 1 + 1 AS solution", (err, results, fields) => {
  if (err) throw err;
  console.log(`The solution is: ${results[0].solution}`);
});

con.end();
