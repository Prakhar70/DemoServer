const express = require('express');
const app = express();
const ip = require('ip');


app.get('/ping',(req, res)=>{
    return res.json({
        message: 'pong',
        serverAddress: ip.address(),
    })
})

app.listen(3000, () => {
    console.log('server started at http://localhost:3000');
})