const express = require('express');
const app = express();
const port = 8080;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

let people = '';

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const createTable = `CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar(255), primary key(id))`;
connection.query(createTable);

const insert = `INSERT INTO people(name) values('Waner')`;
connection.query(insert);

const select = `SELECT name FROM people`;
connection.query(select, (err, result, fields) => {
  if (err) throw err;
  people = result.map(person => person.name).join('<br /> ');
});

connection.end();

app.get('/', (req, res) => {
  res.send(`<h1>Full Cycle Rocks!</h1><p><strong>Resultado:</strong> <br /> ${people}</p>`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});