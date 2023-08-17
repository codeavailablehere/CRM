const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'beat_crm',
});
 
const connectDB = () => {
  try {
    connection.connect((err) => {
      if (err) {
        return console.log(err.message);
      } else {
        return console.log('Connected to the MySQL server.');
      }
    }); 
  } catch (error) {
    console.log('Not connected to DB');
  }
  connection.query("select * from companys",(err,result)=>{
    console.warn("Result",result);
  })
};

connectDB();

module.exports = connection;
