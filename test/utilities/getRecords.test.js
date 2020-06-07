import "babel-polyfill";

import chai from "chai";
import Sequelize from "sequelize";

import Models from "../../src/models";
import getRecords from "../../src/utilities/getRecords";

const { Owner } = Models;

chai.should();

/* Test the /signup route */
describe("Test getRecods function", () => {
  const filter = {
    options: {
      id: 1,
      start_year: 2007,
      end_year: 2009,
      gender: "male",
      countries: ["Brazil", "Ireland", "Egypt", "Peru"],
      colors: ["Green"],
    },
    limit: 3,
  };

  it("filter options", (done) => {
    getRecords(Owner, filter.options, Sequelize.Op, filter.limit)
      .then((response) => {
        response[0].car_color.should.equal("Green");
        done();
      })
      .catch((error) => {
        done();
      });
  });
});
