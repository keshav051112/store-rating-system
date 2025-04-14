const db = require('./db');

exports.rateStore = (userId, storeId, rating) => {
  return db.query(
    `
      INSERT INTO ratings (user_id, store_id, rating) 
      VALUES ($1, $2, $3)
      ON CONFLICT (user_id, store_id) 
      DO UPDATE SET rating = EXCLUDED.rating, updated_at = NOW()
    `,
    [userId, storeId, rating]
  );
};

exports.getUserRatingForStore = (userId, storeId) => {
  return db.query(
    'SELECT rating FROM ratings WHERE user_id = $1 AND store_id = $2',
    [userId, storeId]
  );
};

exports.getStoreAverageRating = (storeId) => {
  return db.query(
    'SELECT AVG(rating) AS avg FROM ratings WHERE store_id = $1',
    [storeId]
  );
};

exports.getRatingCount = (storeId) => {
  return db.query(
    'SELECT COUNT(*) AS count FROM ratings WHERE store_id = $1',
    [storeId]
  );
};

exports.getKPI = async () => {
  const users = await db.query('SELECT COUNT(*) FROM users');
  const stores = await db.query('SELECT COUNT(*) FROM stores');
  const ratings = await db.query('SELECT COUNT(*) FROM ratings');
  
  return {
    users: users.rows[0].count,
    stores: stores.rows[0].count,
    ratings: ratings.rows[0].count
  };
};