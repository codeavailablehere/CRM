const connection = require('./db/connection');
const express = require('express');
const router = require('./router');
const app = express();
const port = 5000;
const cors = require('cors');

app.get('/', (req, res) => {
  res.send('HI THis is open port');
});
app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(router);
app.listen(port, () => {
  console.log(`Now Listening Port is open ${port}`);
});
