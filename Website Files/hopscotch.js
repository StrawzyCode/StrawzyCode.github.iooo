const express = require('express');
const app = express();
const port = proc.env.PORT || 3000;
require('dotenv').config();
app.set('view engine', 'ejs');