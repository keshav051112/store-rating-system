const express = require('express');
const { authenticate } = require('../middleware/authMiddleware');
const {
  getStores,
  rateStore,
  addStore
} = require('../controllers/storeController');

const router = express.Router();

router.get('/', authenticate(['user', 'admin', 'store_owner']), getStores);



router.post('/rate', authenticate(['user']), rateStore);


router.post('/', authenticate(['store_owner']), addStore);

module.exports = router;
