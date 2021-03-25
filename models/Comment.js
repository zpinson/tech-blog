const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// TODO: YOUR CODE HERE
class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // title: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // venue_name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // date: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // time: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    // event_url: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
      // },
    // postId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'Post',
    //     key: 'id',
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Comment',
  }
);

module.exports = Comment;
