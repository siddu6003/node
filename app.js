const exp=require('express')
const path = require('path');
const router = exp.Router();
app=exp()
const port = process.env.port || 3000

app.listen(port,function(req,res){
  console.log("listen")
})


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
