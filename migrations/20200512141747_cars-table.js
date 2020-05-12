
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl =>{
      tbl.increments();

      tbl.uuid('VIN').notNullable();
      tbl.string('make', 30).notNullable();
      tbl.string('model', 30).notNullable();
      tbl.integer('milage').notNullable();

      //Not required for the table
      tbl.string('transmission type', 20).nullable();
      tbl.string('title status', 20).nullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
