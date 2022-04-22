module.exports = (sequelize, type) => {
  return sequelize.define("cell", {
    type: type.ARRAY(type.INTEGER),
  });
};
