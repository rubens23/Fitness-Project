"use strict";

module.exports = function(sequelize, DataTypes) {
  var myFitnessscore = sequelize.define("myFitnessscore", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  })
  return Cat;
};
