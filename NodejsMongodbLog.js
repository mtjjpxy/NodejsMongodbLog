const express=require("express")
const app=express()
const mongoose= require('mongoose')
mongoose.connect('mongode://mongodb://172.21.2.236:27017/190110910318')
const schema={
    name:String,
    age:Number,
    health:String,
    hobby:String
}
const mydata = mongoose.model('cat1s',schema);
const kitty=new mydata({name:'testZildjian2'});
kitty.save()

app.use('/',express.static('public'))
app.get("/input",(req,res)=>{
    res.send(req.query)
    console.log(req.query)
    const kitty=new mydata({name:'bb'});
    kitty.save()
})
app.listen(60318)