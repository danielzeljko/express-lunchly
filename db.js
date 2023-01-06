"use strict";

/** Database for lunchly */

const { Client } = require("pg");

// const DB_URI = process.env.NODE_ENV === "test"
//     ? "postgresql:///lunchly_test"
//     : "postgresql:///lunchly";

/* Daniel's WSL**/
const DB_URI = process.env.NODE_ENV === "test"
  ? "postgresql://daniel:postgres@localhost/lunchly_test"
  : "postgresql://daniel:postgres@localhost/lunchly";

/* Jesse's WSL**/
// const DB_URI = process.env.NODE_ENV === "test"
//   ? "postgresql://meyburdj:meyburdj@localhost/lunchly_test"
//   : "postgresql://meyburdj:meyburdj@localhost/lunchly";



let db = new Client({
  connectionString: DB_URI,
});

db.connect();


module.exports = db;
