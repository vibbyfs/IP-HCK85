'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Address.hasMany(models.Citizen)
    }
  }
  Address.init({
    provinceId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Province is required'
        },
        notEmpty: {
          msg: 'Province is required'
        },
        len: [2, 10],
      },
    },
    provinceName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Province is required'
        },
        notEmpty: {
          msg: 'Province is required'
        },
        len: [2, 100],
      },
    },
    regencyId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Regency is required'
        },
        notEmpty: {
          msg: 'Regency is required'
        },
      },
    },
    regencyName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Regency is required'
        },
        notEmpty: {
          msg: 'Regency is required'
        },
      },
    },
    districtId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'District is required'
        },
        notEmpty: {
          msg: 'District is required'
        },
      },
    },
    districtName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'District is required'
        },
        notEmpty: {
          msg: 'District is required'
        },
      },
    },
    villageId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Village is required'
        },
        notEmpty: {
          msg: 'Village is required'
        },
      },
    },
    villageName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Village is required'
        },
        notEmpty: {
          msg: 'Village is required'
        },
      },
    },
    rt: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'RT is required'
        },
        notEmpty: {
          msg: 'RT is required'
        },
        is: {
          args: /^[0-9]{1,3}$/,
          msg: 'RT must be a number between 1 and 3 digits'
        },
      },
    },
    rw: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'RW is required'
        },
        notEmpty: {
          msg: 'RW is required'
        },
        is: {
          args: /^[0-9]{1,3}$/,
          msg: 'RW must be a number between 1 and 3 digits'
        },
      },
    },
    street: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Street is required'
        },
        notEmpty: {
          msg: 'Street is required'
        },
        len: {
          args: [5, 255],
          msg: 'Street must be between 5 and 255 characters long'
        },
      },
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: false,
      notNull: {
        msg: 'Postal code is required'
      },
      notEmpty: {
        msg: 'Postal code is required'
      },
      validate: {
        is: {
          args: /^[0-9]{5}$/,
          msg: 'Postal code must be exactly 5 digits'
        },
      },
    },

  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};