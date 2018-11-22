const async = require('async');
const redis = require('redis');
var client = redis.createClient({
    host: 'localhost',
    port: 6379
});

client.on('error', function (err) {
    console.log(err);
});

const axios = require('axios');

axios.get('https://blockchain.info/latestblock')
    .then((res) => {
        let trxArr = res.data['txIndexes'];
        let blockI = res.data['block_index']
        client.keys(blockI.toString(), (err,data) => {
            if (isEmpty(data)) {
                processArray(trxArr);
            } else {
                console.log(`Latest block information already stored...`);
            }
        })

        async function processArray(array) {
            async.forEach(array, async (value,key,cb) => {
                let resultHash;
                await setTimeout(() => {},100)
                await axios.get(`https://blockchain.info/rawtx/${value}`)
                    .then((res) => {
                        resultHash = res.data.hash;
                    })
                await client.zadd(blockI, value, resultHash)
            }); 
            console.log(`Finished retrieving data from latest block`);
        }
    })


function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
