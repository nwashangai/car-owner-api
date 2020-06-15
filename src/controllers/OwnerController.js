import Sequelize from "sequelize";
import Models from "../models";
import { serverError } from "../utilities/Error";
import { successResponse } from "../utilities/Success";
import getRecords from "../utilities/getRecords";

const { Owner } = Models;

/**
 * Class representing the User controller
 * @class UserController
 * @description User controller
 */
class OwnerController {
  /**
   * Report case
   * @param {object} req - Request object
   * @param {object} res - Request object
   * @returns {object} Response object
   */
  static async records(req, res) {
    try {
      const options = req.body.options || {};
      const limit = req.body.limit || 20;
      const offset = req.body.offset || 0;

      const result = await getRecords(
        Owner,
        options,
        Sequelize.Op,
        limit,
        offset
      );
      successResponse(200, result, res);
    } catch (error) {
      serverError(500, error.message, res);
    }
  }
}

export default OwnerController;
