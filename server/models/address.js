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
    notEmpty: true,
    len: [2, 10], // ID provinsi biasanya pendek
  },
},
provinceName: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    notEmpty: true,
    len: [2, 100],
  },
},
regencyId: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    notEmpty: true,
  },
},
regencyName: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    notEmpty: true,
  },
},
districtId: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    notEmpty: true,
  },
},
districtName: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    notEmpty: true,
  },
},
villageId: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    notEmpty: true,
  },
},
villageName: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    notEmpty: true,
  },
},
rt: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    is: /^[0-9]{1,3}$/,
  },
},
rw: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    is: /^[0-9]{1,3}$/,
  },
},
street: {
  type: DataTypes.TEXT,
  allowNull: false,
  validate: {
    notEmpty: true,
    len: [5, 255],
  },
},
postalCode: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    is: /^[0-9]{5}$/,
  },
},

  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};