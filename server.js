const express=require('express');
const app=express(); // create express app
const port =4000;
app.get('/',(req,res)=>{ // define a route handler for the default home page
console.log(' url de hello');
res.send('hello world');

});
app.get('/hi/:nom',(req,res)=>{ 
res.send(`hello ${req.params.nom}`);
});

app.listen(port,()=>{ // start express server on port 4000
console.log('server started on port'+port);
});

