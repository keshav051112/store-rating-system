const express = require('express');
const { getKPI, getAllUsers,getAllStores } = require('../controllers/adminController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();
router.get('/kpi', authenticate(['admin']), getKPI);
router.get('/users', authenticate(['admin']), getAllUsers);
router.get('/stores', authenticate(['admin']), getAllStores);
module.exports = router;