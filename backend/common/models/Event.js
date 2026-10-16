
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Event = sequelize.define('Event', {
  event_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  title: {
    type: DataTypes.STRING(200),
    allowNull: false
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },

  event_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },

  start_time: {
    type: DataTypes.TIME,
    allowNull: true
  },

  end_time: {
    type: DataTypes.TIME,
    allowNull: true
  },

  capacity: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      min: 1
    }
  },

  status: {
    type: DataTypes.ENUM('ACTIVE', 'CANCELLED', 'COMPLETED'),
    allowNull: false,
    defaultValue: 'ACTIVE'
  },

  organizer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'user_id'
    }
  },

  category_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'categories',
      key: 'category_id'
    }
  },

  location_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'locations',
      key: 'location_id'
    }
  },

  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'events',
  timestamps: false
});

module.exports = Event;
