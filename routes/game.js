const router = require("express").Router();

const { Game, Cell } = require("../db");

router.get("/", async (req, res) => {
  try {
    //Instancio la partida
    let game = await Game.create({
      state: {
        code: 1,
        description: "CREATED",
      },
    });

    //Instancio las celdas
    let cells = await Cell.create({
      type: [],
    });

    //realizo la asociación
    await game.addCell(cells);

    //unifico la información
    const response = { game, cells };
    //si ambos datos están disponibles los entrego, de lo contrario envío mensaje de error
    if (game && cells) {
      return res.status(200).json(response);
    } else {
      res.status(400).json({ message: "creación ha fallado" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("No se pueden crear partidas");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    //busco la partida correspondiente al id pasado en parámetros e incluyo la información de su State.
    const game = await Game.findByPk(id, {
      attributes: {
        exclude: ["updatedAt"],
      },
    });

    //busco las celdas correspondientes a la partida
    const cells = await Cell.findOne({
      where: {
        gameId: id,
      },
      attributes: {
        exclude: ["id", "createdAt", "updatedAt", "gameId"],
      },
    });
    //si ambos datos están disponibles los entrego. De lo contrario, envío un mensaje de error.
    const response = { game, cells };

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(404).send("not found");
  }
});

router.post("/", async (req, res) => {
  try {
    const { game, cells } = req.body;

    const { id, state } = game;

    //actualizo la partida con la información recibida. Si no ha cambiado nada la información seguirá igual.
    const gameInfo = await Game.update(
      {
        state: {
          code: state.code,
          description: state.description,
        },
      },
      {
        where: {
          id: id,
        },
      }
    );

    const cellsInfo = await Cell.update(
      {
        type: cells.type,
      },
      {
        where: {
          gameId: id,
        },
      }
    );

    //recupero las instancias recientemente modificadas
    const updatedGame = await Game.findByPk(id, {
      attributes: {
        exclude: ["updatedAt"],
      },
    });

    const updatedCells = await Cell.findOne({
      where: {
        gameId: id,
      },
      attributes: {
        exclude: ["id", "createdAt", "updatedAt", "gameId"],
      },
    });
    //las agrupo y las entrego
    const response = { updatedGame, updatedCells };

    if (gameInfo && cellsInfo) {
      return res.status(200).json(response);
    } else {
      return res.status(400).json({ message: "error durante la partida" });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
