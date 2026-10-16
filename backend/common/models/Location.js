
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Location = sequelize.define('Location', {
  location_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    type: DataTypes.STRING(150),
    allowNull: false
  },

  address: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  city: {
    type: DataTypes.STRING(100),
    allowNull: false
  },

  capacity: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      min: 1
    }
  }
}, {
  tableName: 'locations',
  timestamps: false
});

module.exports = Location;
