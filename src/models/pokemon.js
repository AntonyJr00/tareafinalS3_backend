const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Pokemon", PokemonSchema);
