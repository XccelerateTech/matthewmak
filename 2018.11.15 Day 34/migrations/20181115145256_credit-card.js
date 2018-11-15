
exports.up = function(knex, Promise) {
    return knex.schema.createTable('credit-card',(table) => {
        table.increment();
        table.integer('credit card number');
        table.date('expiry date');
        table.integer('cvv');
        table.integer('account_id')
        table.foreign('account_id').references('account.id');
        table.timestamps(true,true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('credit-card');  
};
