
exports.up = function(knex, Promise) {
    return knex.schema.createTable('transaction',(table) => {
        table.increment();
        table.decimal('amount');
        table.string('payee');
        table.string('purpose');
        table.integer('credit-card_id')
        table.foreign('credit-card_id').references('credit-card.id');
        table.timestamps(true,true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('transaction');
};
