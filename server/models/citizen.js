'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Citizen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      Citizen.belongsTo(models.User);
      Citizen.belongsTo(models.Address);
    }
  }
  Citizen.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nationalId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        is: /^[0-9]{16}$/,
      }
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['Male', 'Female', 'Other']]
      }
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    placeOfBirth: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    religion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu']]
      }
    },
    maritalStatus: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['Single', 'Married', 'Divorced', 'Widowed']]
      }
    },
    bloodType: {
      type: DataTypes.STRING,
      validate: {
        isIn: [['A', 'B', 'AB', 'O']]
      }
    },
    occupation: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100]
      }
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Indonesia',
      validate: {
        notEmpty: true
      }
    },
    AddressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }

  }, {
    sequelize,
    modelName: 'Citizen',
  });
  return Citizen;
};