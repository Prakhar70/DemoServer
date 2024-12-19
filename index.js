const express = require('express');
const app = express();
const ip = require('ip');
const os = require('os');


app.get('/ping',(req, res)=>{
    return res.json({
        message: 'pong',
        serverAddress: ip.address(),
        //subnet: ip.subnet(ip.address(), ip.toLong(ip.address())),
        interfaces:os.networkInterfaces()
    })
})

app.listen(3000, () => {
    console.log('server started at http://localhost:3000');
})