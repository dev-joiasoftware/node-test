const express = require('express');
const app = express();
const port = 3000;

// TODO somet

app.get('/', (req, res) => {
  //console.log(res);
  res.send('Hello World!');
});

app.get('/admin', (req, res) => {
  //console.log(test);
  res.sendFile(__dirname+'/index.html');
});
app.listen(port, () => {
  console.log('Example app listening at http://localhost:${port}');
});
