const { default: mongoose } = require("mongoose");
const Movie = require("../models/Movie");

const getMovieById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such movie" });
  }
};
