"use strict";
module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define("Owner", {
    first_name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [3, 100],
        is: {
          args: /^[a-zA-Z\s]+$/i,
          msg: "First name must be Alphabets only",
        },
      },
    },
    last_name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [3, 100],
        is: {
          args: /^[a-zA-Z\s]+$/i,
          msg: "Last name must be Alphabets only",
        },
      },
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Valid email-id required",
        },
      },
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    car_model: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [2, 100],
        is: {
          args: /^[a-zA-Z\s]+$/i,
          msg: "Car model must be Alphabets only",
        },
      },
    },
    car_model_year: DataTypes.INTEGER,
    car_color: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        len: [2, 100],
        is: {
          args: /^[a-zA-Z]+$/i,
          msg: "Car color must be Alphabets only",
        },
      },
    },
    gender: {
      allowNull: false,
      type: DataTypes.ENUM(["Male", "Female"]),
      validate: {
        isIn: {
          args: [["Male", "Female"]],
          msg: "Gender must be either male or female",
        },
      },
    },
    job_title: DataTypes.TEXT,
    bio: DataTypes.TEXT,
  });
  Owner.associate = function (models) {
    // associations can be defined here
  };
  return Owner;
};
