const pg = require('pg');

var config = {
    user: 'matt',
    database: 'fruits',
    password: 'password',
    host: 'localhost',
    port: 5432,
    max: 1,
    idleTimeoutMillis: 30000
}

var client = new pg.Client(config);

client.connect();

// I will just retrieve data from staff table instead as it is established

client.query("SELECT first_name, last_name FROM staff WHERE first_name = 'Steven'", function(err, results) {
    if(err) {
        console.log(err);
    }
    console.log(results.rows);
})