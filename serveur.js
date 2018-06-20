const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(3999, () => console.log ('Example app listeing on port 3999!'));