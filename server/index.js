express=require("express");
const cors = require('cors');
const axios= require('axios');

app=express();
const API_URL="https://randomuser.me/api?results=8"

app.use(express.json())
app.use(cors())

app.get('/', async (req, res) =>{
    const response=await axios.get(API_URL)
    console.log(response.data.results)
    res.json(response.data.results)
})
// app.get('/',(req,res)=>{
//     // res.send('namaste')
//     first={
//         'name':'pasa',
//         'age':'22',
//         'email':'romakmaharjan@gmail.com'
//     }
//     res.json(first)
// })

app.listen(4000,function(){ console.log('server is running')});