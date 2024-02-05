const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgresql://localhost:5432/postgres");

const Transaction = sequelize.define("transaction", {
  TransactionID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  UserID: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Amount: {
    type: DataTypes.FLOAT,
  },
  Timestamp: {
    type: DataTypes.DATE,
  },
});

module.exports = Transaction;
