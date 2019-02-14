const express = require('express')
const app = express()
const port = 3001

//app.get('/hello', (req, res) =>{
//     console.log(req.query);
//     res.send('Hello'+req.query.name)});
// app.get('/add', (req, res) => res.send('0'))
app.get('/world', (req, res) => res.send("hello today"));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))