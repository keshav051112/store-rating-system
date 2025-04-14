const express = require('express');
const { getKPI, getAllUsers } = require('../controllers/adminController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();
router.get('/kpi', authenticate(['admin']), getKPI);
router.get('/users', authenticate(['admin']), getAllUsers);
module.exports = router;