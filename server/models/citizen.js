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
        notNull: {
          msg: 'National ID is required'
        },
        notEmpty: {
          msg: 'National ID is required'
        },
        len: {
          args: [16, 16],
          msg: 'National ID must be exactly 16 characters long'
        },
        isNumeric: {
          msg: 'National ID must be a numeric value'
        },
      }
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Full name is required'
        },
        notEmpty: {
          msg: 'Full name is required'
        },
        len: {
          args: [3, 100],
          msg: 'Full name must be between 3 and 100 characters long'
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Gender is required'
        },
        notEmpty: {
          msg: 'Gender is required'
        },
        isIn: {
          args: [['Male', 'Female', 'Other']],
          msg: 'Gender must be one of the following: Male, Female, or Other.'
        }
      }

    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      notNull: {
        msg: 'Date of birth is required'
      },
      notEmpty: {
        msg: 'Date of birth is required'
      },
      validate: {
        isDate: {
          msg: 'Date of birth must be a valid date'
        }
      },
    },
    placeOfBirth: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Place of birth is required'
        },
        notEmpty: {
          msg: 'Place of birth is required'
        }
      }
    },
    religion: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Religion is required'
        },
        notEmpty: {
          msg: 'Religion is required'
        },
        isIn: [['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu', 'Other']]
      }
    },
    maritalStatus: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Marital status is required'
        },
        notEmpty: {
          msg: 'Marital status is required'
        },
        isIn: {
          args: [['Single', 'Married', 'Divorced', 'Widowed']],
        }
      }

    },
    bloodType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Blood type is required'
        },
        notEmpty: {
          msg: 'Blood type is required'
        },
        isIn: [['A', 'B', 'AB', 'O']]
      }
    },
    occupation: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Occupation is required'
        },
        notEmpty: {
          msg: 'Occupation is required'
        },
        len: {
          args: [3, 100],
          msg: 'Occupation must be between 3 and 100 characters long'
        }
      }
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Indonesia',
      validate: {
        notNull: {
          msg: 'Nationality is required'
        },
        notEmpty: {
          msg: 'Nationality is required'
        }
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