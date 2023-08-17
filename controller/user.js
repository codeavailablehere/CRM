const connection = require('../db/connection');

// Add New Department

module.exports.userLogin = async (req, res) => {
  //const data = req.body;
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res.status(404).send('Invalid Detail');
  }
  connection.query(
    `SELECT * FROM user WHERE email= ? AND password= ?`,
    [email, password],
    (err, results, fields) => {
      if (err) {
        res.status(404, 'error in api', err.message);
      } else {
        res.status(200).send({ status: 'success', results: results });
      }
    }
  );
  //console.log(user);
  // connection.query("INSERT INTO departments SET?", data, (err, results, fields) => {
  //     if (err) { res.status(404).send("error in api",err.message) }
  //    else { res.status(201).send(results)  }
  // })
};
