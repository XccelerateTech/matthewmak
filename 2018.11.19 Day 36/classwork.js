var redis = require('redis');
var client = redis.createClient({
    host: 'localhost',
    port: 6379
});

client.on('error', function (err) {
    console.log(err);
});

(async () => {

    // for (let i = 0; i < 100001; i++) {
    //     await client.set(`key${i}`, i, (err, data) => {
    //         if (err) { return console.log(err) }
    //     });
    // }

    await client.keys('*', (err, data) => {
        if (err) { return console.log(err) }
        console.log(data);
    })

    for (let i = 0; i < 100001; i++) {
        await client.del(`key${i}`, (err, data) => {
            if (err) { return console.log(err) }
        });
    }

})()


