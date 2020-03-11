
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('personas').del()
    .then(function () {
      // Inserts seed entries
      return knex('personas').insert([
        {
          primerNombre: 'rowValue1',
          segundoNombre: 'rowValue1',
          apellidoPaterno: 'rowValue1',
          apellidoMaterno: 'rowValue1',
          edad: 30
        },
        {
          primerNombre: 'rowValue2',
          segundoNombre: 'rowValue2',
          apellidoPaterno: 'rowValue2',
          apellidoMaterno: 'rowValue2',
          edad: 30
        },
        {
          primerNombre: 'rowValue3',
          segundoNombre: 'rowValue3',
          apellidoPaterno: 'rowValue3',
          apellidoMaterno: 'rowValue3',
          edad: 30
        }
      ]);
    });
};
