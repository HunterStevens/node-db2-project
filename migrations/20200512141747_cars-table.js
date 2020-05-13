
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl =>{
      tbl.increments();

      tbl.string('VIN', 30).notNullable().unique();
      tbl.string('make', 30).notNullable();
      tbl.string('model', 30).notNullable();
      tbl.integer('mileage').notNullable();

      //Not required for the table
      tbl.string('transmission type', 20).nullable();
      tbl.string('title status', 20).nullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
