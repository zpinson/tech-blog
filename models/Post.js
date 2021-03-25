const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// TODO: YOUR CODE HERE
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // format_date: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // createdAt: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Post',
  }
);

module.exports = Post;
