module.exports = (sequelize, type) => {
  return sequelize.define("game", {
    id: {
      type: type.UUID,
      defaultValue: type.UUIDV4,
      primaryKey: true,
    },
    state: type.JSON,
  });
};
