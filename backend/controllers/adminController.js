const userModel = require('../models/userModel');
const ratingModel = require('../models/ratingModel');
const storeModel = require('../models/storeModel');

exports.getKPI = async (req, res) => {
  try {
    const data = await ratingModel.getKPI(); 
    res.json(data); 
  } catch (error) {
    console.error('Error fetching KPI:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers(); 
    res.json(users.rows); 
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getAllStores = async (req, res) => {
  try {
    const stores = await storeModel.getStores(); 
    res.json(stores); 
  } catch (error) {
    console.error('Error fetching stores:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
