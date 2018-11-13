const csvReader = require('csv-reader');
const pg = require('pg');
const fs = require('fs');


let config = {
    user: 'matt',
    database: 'fruits',
    password: 'password',
    host: 'localhost',
    port: 5432,
    max: 1,
    idleTimeoutMillis: 30000
}

let client = new pg.Client(config);

client.connect();

let begin = (done) => {
    client.query('BEGIN',function(err){
        if(err){
            console.log(err);
        }
        done();
    });
}

let commit = (done) => {
    client.query('COMMIT',function(err){
        if(err){
            console.log(err);
        }
        done();
    });
}

let rollback = (done) => {
    client.query('ROLLBACK',function(err){
        if(err){
            console.log(err);
        }
        done();
    });
}

let transaction = (buysell,fruit,quantity) => {
    begin(() => {
        console.log(`Transaction (${buysell} ${quantity} ${fruit}) begin...`);
    });
    let id;

    client.query(`SELECT name,id FROM citrus WHERE name='${fruit}';`,(err,res) => {
        if (err) {
            console.log(err);
        } else {
            id = res.rows[0].id
            if(buysell == 'BUY'){
                client.query(`UPDATE stock SET quantity = quantity + ${quantity} WHERE citrus_id = ${id};`,(err,res) => {
                    if (err) {
                        rollback(() => {
                            console.log(`Transaction (${buysell} ${quantity} ${fruit}(id: ${id})) is rolled back...`);
                        });
                    } else {
                        commit(() => {
                            console.log(`Transaction (${buysell} ${quantity} ${fruit}(id: ${id})) commited...`)
                        })
                    }
                })
        
            } else if (buysell == 'SELL') {
        
                client.query(`SELECT * FROM stock WHERE id = ${id};`,(err,res) => {
                    if (err) {
                        rollback(() => {
                            console.log(`Transaction (${buysell} ${quantity} ${fruit}(id: ${id})) is rolled back...`);
                        });
                    } else {
                        if (res.rows[0].quantity > quantity) {
                            client.query(`UPDATE stock SET quantity = quantity - ${quantity} WHERE id = ${id};`,(err,res) => {
                                if (err) {
                                    rollback(() => {
                                        console.log(`Transaction (${buysell} ${quantity} ${fruit}(id: ${id})) is rolled back...`);
                                    });
                                } else {
                                    commit(() => {
                                        console.log(`Transaction (${buysell} ${quantity} ${fruit}(id: ${id})) commited...`)
                                    })
                                }
                            })
                        } else {
                            rollback(() => {
                                console.log(`Insufficient stock quantity...`)
                                console.log(`Transaction (${buysell} ${quantity} ${fruit}(id: ${id})) is rolled back...`);
                            }); 
                        }
                    }
                })
            }
        }
    })
}


var inputStream = fs.createReadStream('transaction_record.csv', 'utf8');
 
inputStream
    .pipe(csvReader({ parseNumbers: true, parseBooleans: true, trim: true }))
    .on('data', function (row) {
        transaction(row[0],row[1],row[2]);
        console.log('Will process row: ', row);
    })
    .on('end', function (data) {
    });
 


