import { pool } from "../config/database.js";

export const getAllExteriers = async (req, res) => {
  try {
    const query = `
                SELECT * FROM exterior
            RETURNING * `;
            
    const result = await pool.query(query);åå
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export const getExteriorById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const query = `
                        SELECT * FROM exterior where id=$1
                    RETURNING * `;
            
    const result = await pool.query(query, [id]);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export const getAllRoofs = async (req, res) => {
  try {
    const query = `
                    SELECT * FROM roof
                RETURNING * `;
            
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export const getRoofById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const query = `
                        SELECT * FROM roof wher id=$1
                    RETURNING * `;
            
    const result = await pool.query(query, [id]);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export const getAllWheels = async (req, res) => {
  try {
    const query = `
                        SELECT * FROM wheels
                    RETURNING * `;
            
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export const getWheelById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const query = `
                        SELECT * FROM wheel where id=$1
                    RETURNING * `;
            
    const result = await pool.query(query, [id]);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export const getAllInteriors = async (req, res) => {
  try {
    const query = `
                        SELECT * FROM interior
                    RETURNING * `;
            
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};

export const getInteriorById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const query = `
                        SELECT * FROM interior where id=$1 
                    RETURNING * `;
            
    const result = await pool.query(query, [id]);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};
