// reference: https://expressjs.com/ja/starter/hello-world.html

const express = require('express');
const app = express();

app.use(express.static('dist'));

app.listen(3000);