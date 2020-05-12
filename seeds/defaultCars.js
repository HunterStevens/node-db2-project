const {v4: uuid} = require('uuid');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN:`${uuid()}`, make:"Hyundai", model:"Elantra", mileage:1000},
        {VIN:`${uuid()}`, make:"Toyota", model:"Something", mileage:90000},
        {VIN:`${uuid()}`, make:"Cheverolet", model:"Cruze", mileage:40000}
      ]);
    });
};
