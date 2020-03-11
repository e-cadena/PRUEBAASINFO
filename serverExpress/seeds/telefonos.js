
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('telefonos').del()
    .then(function () {
      // Inserts seed entries
      return knex('telefonos').insert([
        {
          idPersonas: 1,
          numero: '555554444'
        },
        {
          idPersonas: 1,
          numero: '555554448'
        },
        {
          idPersonas: 2,
          numero: '555554446'
        },
        {
          idPersonas: 3,
          numero: '555554455'
        }
      ]);
    });
};
