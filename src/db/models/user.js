'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstName: {
      type: DataTypes.STRING,
      field: 'first_name',
      allowNull:false
    },
    lastName: {
      type: DataTypes.STRING,
      field: 'last_name'
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique:true, 
      validate: {
        isEmail: true
      },
      set(val) {
        this.setDataValue('email', val.trim().toLowerCase());
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      set(val) {
        const hashPassword = bcrypt.hashSync(val, 10);
        this.setDataValue('password', hashPassword);
      }
    },
    countryCode:{
      type: DataTypes.STRING,
      field: 'country_code',
      defaultValue: '91'
    },
    phoneNumber:{
      type: DataTypes.STRING,
      field: 'phone_number',
      allowNull:false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      field: 'is_active',
      defaultValue: true
    },
    createdAt: {
      allowNull: false,
      field: 'created_at',
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      field: 'updated_at',
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.prototype.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  return User;
};