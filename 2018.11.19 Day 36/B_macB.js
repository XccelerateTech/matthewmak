const redis = require('redis');
var client = redis.createClient({
    host: 'localhost',
    port: 6379
});

client.on('error', function (err) {
    console.log(err);
});

client.keys('*',(err,data) => {
    for (let i in data) {
        client.rpop(data[i],(err,data) => {
            console.log(data);            
        })
    }
})
