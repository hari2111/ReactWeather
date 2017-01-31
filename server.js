var express=require('express');

//Create an app

var app=express();
const PORT=process.env.PORT || 3000;


app.use(function(req,res,next){
  if(req.headers['x-forwarded-proto']==='http'){
    next();
  }else{
    next();
  }
});

app.use(express.static('public'));
app.listen(PORT,function() {
  console.log('express started on port' + PORT);
});
