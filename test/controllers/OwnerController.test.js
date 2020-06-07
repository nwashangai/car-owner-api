import "babel-polyfill";

import chai from "chai";
import chaiHttp from "chai-http";

import Models from "../../src/models";
import app from "../../src/app";

chai.should();
chai.use(chaiHttp);

/* Test the /signup route */
describe("Record Test", () => {
  it("get data", (done) => {
    const body = {
      options: {
        id: 1,
        start_year: 2007,
        end_year: 2009,
        gender: "male",
        countries: ["Brazil", "Ireland", "Egypt", "Peru"],
        colors: ["Green", "Violet", "Yellow", "Blue"],
      },
      limit: 3,
    };
    chai
      .request(app)
      .post("/records")
      .send(body)
      .end((err, res) => {
        res.body.data.should.be.a("array");
        res.should.have.status(200);
        done();
      });
  });
});
