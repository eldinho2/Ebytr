const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./controllers/ebytrControllers')

const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server online na Porta:${PORT}`);
});
