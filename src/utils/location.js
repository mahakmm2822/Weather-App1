const { exec } = require("child_process");
const { address } = require("ip");
const ip = require('ip');
const { stdout, stderr } = require("process");

add=ip.address();
console.log(add);
exec(`curl ipinfo.io/${add}/loc?token=60cf90aa1b9fbe`,(err,stdout,stderr)=>{
    if(err) {console.log(err);return;}
    if(stderr) {console.log(stderr);return;}
    if(stdout){
        console.log(stdout);
        var loc=stdout.split(",");
        var lat=loc[0];
        var long=loc[1];
        console.log(lat);
        console.log(long);
        exec(`curl https://api.darksky.net/forecast/b8d8d8c0b1c9c7f8f8f8f8f8f8f8f8f/${lat},${long}?units=si`,(err,stdout,stderr)=>{
            if(err) {console.log(err);return;}
            if(stderr) {console.log(stderr);return;}
            if(stdout){
                console.log(stdout);
                var data=JSON.parse(stdout);
                console.log(data);
                console.log(data.currently.temperature);
                console.log(data.currently.summary);
                console.log(data.currently.humidity);
            }
        })
    };
})