
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('note').del()
    .then(function () {
      // Inserts seed entries
      return knex('note').insert([
        {content: 'Greeting, User 1. May I recommend you the below song?',user_id:'1'},
        {content: "Wonderwall (Oasis)\nSongwriters: Noel Gallagher\nWonderwall lyrics © Sony/ATV Music Publishing LLC",user_id:'1'},
        {content: "Today is gonna be the day\nThat they're gonna throw it back to you\nBy now you should've somehow\nRealized what you gotta do\nI don't believe that anybody\nFeels the way I do, about you now",user_id:'1'},
        {content: 'Greeting, User 2 May I recommend you the below song?',user_id:'2'},
        {content: "\"Hold Your Colour [Bi-Polar Remix]\"\nBy Pendulum",user_id:'2'},
        {content: "Hold your colours against the wall\n\nShe looked into your eyes\nAnd saw what laid beneath\nDon't try to save yourself\nThe circle is complete",user_id:'2'}
      ]);
    });
};
