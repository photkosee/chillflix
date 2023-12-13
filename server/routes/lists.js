const router = require("express").Router();
const List = requrie("../models/List.js");
const verify = require("../verifyToken");

// create a list
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);

    try {
      const savedList = await newList.save();

      res.status(200).json(savedList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are no allowed!");
  }
});

// get a list from given genre
router.get("/", verify, async (req, res) => {
  const type = req.query.type;
  const genre = req.query.genre;
  let list = [];

  try {
    if (type) {
      if (genre) {
        list = await List.aggregate([
          { $match: { type: type, genre: genre } },
          { $sample: {size: 10 } },
        ]);
      } else {
        list = await List.aggregate([
          { $match: { type: type } },
          { $sample: {size: 10 } },
        ]);
      }
    } else {
      list = await List.aggregate([{ $sample: {size: 10 } }]);
    }

    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json("The list has been deleted.");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You are no allowed!");
  }
});

module.exports = router;
