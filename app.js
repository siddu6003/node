const exp=require('express')
app=exp()
const port = process.env.port || 3000
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname+'/index.html'));
})

app.listen(port,function(req,res){
  console.log("listen")
})
