const express = require("express");
const path = require("path");

const app = express();
const router = express.Router();
const fpath = path.join(__dirname);

app.use(express.static(fpath));
router.get("*",function(req,res){
   res.sendFile(fpath + "/index.html");
})

app.use("/",router);

app.listen(process.env.PORT || 3000);

// const express = require('express');
// const path = require('path');
// //const opn = require('opn');

// const app = express();
// app.set('port', process.env.PORT || 3000);
// const router = express.Router();
// const sourcePath = path.join(__dirname, 'public');
// app.use(express.static(sourcePath));

// router.get('/', (req, res) => {
//   res.sendFile(`${sourcePath}index.html`);
// });
// router.get('*', (req, res) => {
//   res.sendFile(`${sourcePath}404.html`);
// });

// app.use('/', router);

// app.listen(app.get('port'));
//   