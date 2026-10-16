
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Payment = sequelize.define('Payment', {
  payment_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  registration_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'registrations',
      key: 'registration_id'
    }
  },

  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0.01
    }
  },

  status: {
    type: DataTypes.ENUM('PENDING', 'SUCCESS', 'FAILED'),
    allowNull: false,
    defaultValue: 'PENDING'
  },

  provider_reference: {
    type: DataTypes.STRING(255),
    allowNull: true,
    unique: true
  },

  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'payments',
  timestamps: false
});

module.exports = Payment;
