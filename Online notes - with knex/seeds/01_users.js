
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('noteuser').del()
    .then(function () {
      // Inserts seed entries
      return knex('noteuser').insert([
        {username: 'admin1',password: 'password1'},
        {username: 'admin2',password: 'password2'}
      ]);
    });
};
