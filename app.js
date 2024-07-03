const express = require('express');
const app = express();
const port = 3000;
const {start,home}=require('./Backend/Controllers/Controller')
app.get('/Start',start);
app.get('/Home',home)
app.use('images',express.static('public'))
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
