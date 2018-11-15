const csvReader = require('csv-reader');
const pg = require('pg');
const fs = require('fs');
require('dotenv').config();

const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database:   process.env.DB_NAME,
        user:       process.env.USERNAME,
        password:   process.env.PASSWORD
    }
});

let orderProcess = (buysell,fruit,qty) => {
    knex.transaction(async (trx) => {
        await trx
        .select('name','id')
        .from('citrus')
        .where('name',fruit)
        .then(async (rows) => {
            if(buysell == 'BUY'){
                await trx('stock')
                .increment('quantity',qty)
                .where('citrus_id',rows[0]['id'])
            } else if (buysell == 'SELL'){
                await trx('stock')
                .where('citrus_id',rows[0]['id'])
                .then(async (rows) => {
                    if(rows[0]['quantity'] > qty){
                        await trx('stock')
                        .decrement('quantity',qty)
                        .where('citrus_id',rows[0]['id'])
                    }
                })
            }
        })
    })
}


var inputStream = fs.createReadStream('transaction_record.csv', 'utf8');
 
inputStream
    .pipe(csvReader({ parseNumbers: true, parseBooleans: true, trim: true }))
    .on('data', function (row) {
        orderProcess(row[0],row[1],row[2]);
        console.log('Will process row: ', row);
    })
    .on('end', function (data) {
    });
