import { pool } from "../config/database.js";

const getCustomCars = async (req, res) => {
  try {
    const query = `
        SELECT * FROM custom_cars ORDER BY id ASC
    `;
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const getCustomCarById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const query = `
          SELECT * FROM custom_cars where id = $1 ORDER BY id ASC
      `;
    const result = await pool.query(query, [id]);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const createCustomCars = async (req, res) => {
  const { exterior, roof, wheels, interior, price } = req.body;
  try {
    const query = `
        INSERT INTO custom_cars (exterior, roof, wheels, interior, price)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
    `;
    const result = await pool.query(query, [
      exterior,
      roof,
      wheels,
      interior,
      price,
    ]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const updateCustomCars = async (req, res) => {
  const { id } = parseInt(req.params);
  const { exterior, roof, wheels, interior, price } = req.body;
  try {
    const query = `
            UPDATE custom_cars
            SET exterior = $1, roof = $2, wheels = $3, interior = $4, price = $5
            WHERE id = $6
            RETURNING *
        `;
    const result = await pool.query(query, [
      exterior,
      roof,
      wheels,
      interior,
      price,
      id,
    ]);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

const deleteCustomCars = async (req, res) => {
  const { id } = +req.params;
  try {
    const query = `
                DELETE FROM custom_cars
                WHERE id = $1
            `;
    await pool.query(query, [id]);
    res.status(200).json({ message: "Custom car deleted successfully" });
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export default {
  getCustomCars,
  getCustomCarById,
  createCustomCars,
  updateCustomCars,
  deleteCustomCars,
};
