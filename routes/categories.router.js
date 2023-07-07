const express = require('express');

const router = express.Router();

router.get('/:idc/products/:idp', (req, res) => {
  const { idc } = req.params;
  const { idp } = req.params;
  res.json({
    idc,
    idp,
    price: 2000,
  });
});
router.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  res.json({
    categoryId,
    category: 'Computers & Accesories',
  });
});
module.exports = router;
