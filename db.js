const Sequelize = require("sequelize");

const GameModel = require("./models/game");
const CellModel = require("./models/cell");

require("dotenv").config();
const { HOST, USER, PASSWORD, DB } = process.env;

const sequelize = new Sequelize(`${DB}`, `${USER}`, `${PASSWORD}`, {
  host: `${HOST}`,
  dialect: "postgres",
});

const Game = GameModel(sequelize, Sequelize);
const Cell = CellModel(sequelize, Sequelize);

Game.hasMany(Cell, {
  foreignKey: "gameId",
});
Cell.belongsTo(Game);

const app = require("./index");
sequelize.sync({ force: false });

module.exports = {
  Game,
  Cell,
};
