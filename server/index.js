const express = require('express');
const router = require('./router');
const cors = require('cors');
const multer = require('multer');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const port = 3020;

app.listen(port, () => console.log('Server listening on localhost:3020'));
