
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

  surname: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },

  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },

  phone: {
    type: DataTypes.STRING(20),
    allowNull: true
  },

  role: {
    type: DataTypes.ENUM('ADMIN', 'PARTICIPANT'),
    allowNull: false,
    defaultValue: 'PARTICIPANT'
  },

  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'users',
  timestamps: false
});

module.exports = User;
