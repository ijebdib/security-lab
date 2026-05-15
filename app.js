const express = require("express");
const pg = require("pg");

const app = express();
const pool = new pg.Pool();

app.get("/user", async (req, res) => {
  const username = req.query.username;

  const query = "SELECT * FROM users WHERE username = $1";

 const result = await pool.query(query, [username]);
  res.json(result.rows);
});

app.listen(3000);
