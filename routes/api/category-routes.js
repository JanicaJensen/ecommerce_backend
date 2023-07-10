const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      {
        model: Product
      }
    ]
  })
  .then((categoryData) => res.status(200).json(categoryData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

 // find one category by its `id` value
router.get('/:id', (req, res) => {
 
  //including the associated products with the id
  Category.findOne({
    include: [
      {
        model: Product
      }
    ],
    where: {
      id: req.params.id
    }
  })
  .then((categoryData) => res.status(200).json(categoryData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// can add a new category without anything after the / in the url
router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then((categoryInput) => res.json(categoryInput))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
  .then((categoryInput) => {
    if (!categoryInput) {
      res.status(404).json({ message: 'Category not found' });
    }
   res.json(categoryInput)
  })  
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
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