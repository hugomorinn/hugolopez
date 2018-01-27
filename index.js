const EXPRESS = require("express");
const APP = EXPRESS();
const MONGOOSE = require('mongoose');
MONGOOSE.connect('mongodb://lu97is:eable1997@ds127148.mlab.com:1748/nodetest1997',(err)=>{
if(err){
    console.long+('error'+err)    
}   else{
    console.log('conectado')
}
APP.get('/',(req,res)=> {
    res.send('hola mundo');
});
APP.get('/test',(req,res)=>{
    res.send('hola mundo desde test')
} );

APP.listen(8080,()=>{
    console.log('servidor en puerto 8081');
       })