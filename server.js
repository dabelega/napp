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