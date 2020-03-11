
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('datosAbogado', function (t) {
       t.increments('id');
       t.integer('cedula', 10).notNullable();
       t.string('nombre', 30).notNullable();
       t.integer('telefono', 10).notNullable();
       t.string('correo', length: 80).notNullable();

    })
    .createTable('telefonos', function (t) {
        t.increments('id');
        t.string('numero', 10).notNullable();
        t.integer('idPersonas').notNullable();
     });
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable("personas")
    .dropTable("telefonos");
};
