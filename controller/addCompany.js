const { response } = require('express');
const connection = require('../db/connection');

// Add New Company

module.exports.addCompany = async (req, res) => {
  const data = req.body;
  console.log(data);
  connection.query('INSERT INTO user SET?', data, (err, results) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send(results);
    }
  });
};
// Select Department List

module.exports.getCompany = async (req, res) => {
  connection.query('SELECT * FROM user', (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
};

// Update Department List

module.exports.update = async (req, res) => {
  const data = [
    req.body.name,
    req.body.department_code,
    req.body.description,
    req.params.id,
  ];
  //req.params.id;
  console.log(data);
  //const formData = [data, dataId]
  //console.log(formData);
  connection.query(
    'UPDATE departments SET name = ?, department_code = ?, description = ?  WHERE id=?',
    data,
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    }
  );
};

module.exports.delete = async (req, res) => {
  const data = [req.params.id];
  connection.query(
    'DELETE FROM departments WHERE id =' + data,
    (err, results, fields) => {
      if (err) throw err;
      res.send(results);
    }
  );
};
