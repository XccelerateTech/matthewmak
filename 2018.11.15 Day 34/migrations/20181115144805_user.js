
exports.up = function(knex, Promise) {
    return knex.schema.createTable('account',(table) => {
        table.increments();
        table.string('name');
        table.integer('age');
        table.string('address');
        table.timestamps(true,true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('account');
};
