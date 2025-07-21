'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Role.hasMany(models.User)
    }
  }
  Role.init({
    name: {
     type: DataTypes.STRING,
     allowNull: false,
     unique: {
      msg: 'Name Role must be unique'
     },
     validate: {
      notNull: {
        msg: 'Name Role is required'
      },
      notEmpty: {
        msg: 'Name Role is required'
      }
     }

    } 
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};