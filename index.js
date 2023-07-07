const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server en express');
});
app.get('/nueva', (req, res) => {
  res.send('Server en express nueva');
});

app.listen(port, () => {
  console.log('Puerto: ' + port);
});

routerApi(app);
