const express = require('express');
const app = express();
app.listen(1024, () => console.log("aksjdfadjf"));
app.use(express.static('public'));