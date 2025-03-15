const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const HelpRequest = sequelize.define("HelpRequest", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  createdBy: { type: DataTypes.INTEGER, allowNull: false }, // User ID
});

module.exports = HelpRequest;
