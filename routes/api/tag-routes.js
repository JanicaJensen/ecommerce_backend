const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
 
  // find all tags

  Tag.findAll({
      // including its associated product data
    include: [
      {
        model: Product,
        through: ProductTag
      }
    ]
  })
  .then((tagData) => res.status(200).json(tagData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

  // find a single tag by its `id`
router.get('/:id', (req, res) => {
  // including its associated Product data
  Tag.findOne({
    include: [
      {
        model: Product,
        through: ProductTag
      }
    ],
    where: {
      id: req.params.id
    }
  })
  .then((tagData) => res.status(200).json(tagData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// creating a new tag is a post request
router.post('/', (req, res) => {

  Tag.create({
    tag_name: req.body.tag_name
  })
  .then((tagInput) => res.json(tagInput))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// to update we're using a put request and you must request by id
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
  .then((tagInput) => {
    if(!tagInput) {
      res.status(404).json({ message: 'Tag not found' });
    }
    res.json(tagInput)
  })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// request by id to delete
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((remvResonse) => res.json(remvResonse))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;