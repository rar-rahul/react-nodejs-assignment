const express = require('express')
const fs = require('fs')
const app = express()
var cors = require('cors')
const port = 5000


//Set Global Middelware
app.use(cors())

//get request for 
app.get('/',(req,res) => { 
    res.send('api runnning on server')
})

//fetch movie list from json file
app.get('/movies',(req,res) => { 
    fs.readFile('./MovieData.json', 'utf8', (err, data) => {
        if (err) {
          res.status(401).json({
            status:false,
            error:err
          });
        }
        res.status(200).json({
            status:true,
            data:data
        })
      });
})



//server listen on port
app.listen(port,() => { 
    console.log(`server is running on ${port}`)
})