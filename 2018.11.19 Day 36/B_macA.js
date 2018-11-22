const redis = require('redis');
var client = redis.createClient({
    host: 'localhost',
    port: 6379
});

client.on('error', function (err) {
    console.log(err);
});

let message = [{
    "msg":"Hello World!",
    "date": "2017-07-24"
    },
    {
    "msg":"Bye World!",
    "date": "2017-07-25"    
    }]


for (let item in message) {
    client.lpush(`messageQueue:${message[item]['date']}`,message[item]['msg'])
}