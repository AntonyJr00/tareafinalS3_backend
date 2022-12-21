const express = require("express");
const pokemonModel = require("../models/pokemon");
const router = express.Router();
const axios = require("axios");
router.get("/listar", async (req, res) => {
  try {
    const pokemon = await pokemonModel.find();
    res.json(pokemon);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
});
router.get("/listar/:nombre", async (req, res) => {
  const { nombre } = req.params;
  try {
    const pokemon = await pokemonModel.findOne({ name: nombre });
    res.json(pokemon);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
});
router.put("/favoritos/agregar/:nombre", async (req, res) => {
  const { nombre } = req.params;
  try {
    const pokemon = await pokemonModel.findOneAndUpdate(
      { name: nombre },
      {
        $set: { favorite: true },
      },
      { new: true }
    );
    res.json(pokemon);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
});
router.put("/favoritos/eliminar/:nombre", async (req, res) => {
  const { nombre } = req.params;
  try {
    const pokemon = await pokemonModel.findOneAndUpdate(
      { name: nombre },
      {
        $set: { favorite: false },
      },
      { new: true }
    );
    res.json(pokemon);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
});
router.get("/favoritos/listar", async (req, res) => {
  try {
    const pokemon = await pokemonModel.find({ favorite: true });
    res.json(pokemon);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
});

module.exports = router;
