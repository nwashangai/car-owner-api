"use strict";
const data = require("../config/seedData.json");

module.exports = {
  up: (queryInterface, Sequelize) => {
    const bulk = data.slice(0, 9999).map((record) => ({
      first_name: record.first_name,
      last_name: record.last_name,
      email: record.email,
      country: record.country,
      car_model: record.car_model,
      car_model_year: record.car_model_year,
      car_color: record.car_color,
      gender: record.gender,
      job_title: record.job_title,
      bio: record.bio,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    return queryInterface.bulkInsert("Owners", bulk, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Owners", null, {});
  },
};
