import { pool } from "./database.js";
import "./dotenv.js";
import data from "../data/data.js";

const createExteriorTable = async () => {
  const query = `
    DROP TABLE IF EXISTS exterior;

    CREATE TABLE IF NOT EXISTS exterior (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        price INT NOT NULL,
        img_url VARCHAR(255) NOT NULL
    )`;
  try {
    const res = await pool.query(query);
    console.log("🎉 Exterior table created");
  } catch (err) {
    console.log("⚠️ Error creating exterior table");
  }
};

const createRoofTable = async () => {
  const query = `
  DROP TABLE IF EXISTS roof;

  CREATE TABLE IF NOT EXISTS roof (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        price INT NOT NULL,
        img_url VARCHAR(255) NOT NULL,
        is_convertible BOOLEAN NOT NULL
  )`;
  try {
    const res = await pool.query(query);
    console.log("🎉 Roof table created");
  } catch (err) {
    console.log("⚠️ Error creating roof table");
  }
};

const createWheelsTable = async () => {
  const query = `
  DROP TABLE IF EXISTS wheels;

  CREATE TABLE IF NOT EXISTS wheels (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      price INT NOT NULL,
      img_url VARCHAR(255) NOT NULL
  )`;
  try {
    const res = await pool.query(query);
    console.log("🎉 Wheels table created");
  } catch (err) {
    console.log("⚠️ Error creating wheels table");
  }
};

const createInteriorTable = async () => {
  const query = `
  DROP TABLE IF EXISTS interior;

  CREATE TABLE IF NOT EXISTS interior (
      id SERIAL PRIMARY KEY,
      name VARCHAR(50) NOT NULL,
      price INT NOT NULL,
      img_url VARCHAR(255) NOT NULL
  )`;
  try {
    const res = await pool.query(query);
    console.log("🎉 Interior table created");
  } catch (err) {
    console.log("⚠️ Error creating interior table");
  }
};

const seedExteriorTable = async () => {
  await createExteriorTable();
  data.exterior.forEach((element) => {
    const query = `INSERT INTO exterior (name, price, img_url) VALUES ($1, $2, $3)`;
    const values = [element.color, element.price, element.img_url];

    pool.query(query, values, (err, res) => {
      if (err) {
        console.log("⚠️ Error inserting exterior data", err);
        return;
      }
      console.log(`✅ ${element.color} inserted into exterior table`);
    });
  });
};

const seedRoofTable = async () => {
  await createRoofTable();

  data.roof.forEach((element) => {
    const query = `INSERT INTO roof (name, price, img_url, is_convertible) VALUES ($1, $2, $3, $4)`;
    const values = [
      element.name,
      element.price,
      element.img_url,
      element.isConvertible,
    ];

    pool.query(query, values, (err, res) => {
      if (err) {
        console.log("⚠️ Error inserting roof data", err);
        return;
      }
      console.log(`✅ ${element.name} inserted into roof table`);
    });
  });
};

const seedWheelsTable = async () => {
  await createWheelsTable();

  data.wheels.forEach((element) => {
    const query = `INSERT INTO wheels (name, price, img_url) VALUES ($1, $2, $3)`;
    const values = [element.name, element.price, element.img_url];

    pool.query(query, values, (err, res) => {
      if (err) {
        console.log("⚠️ Error inserting wheels data", err);
        return;
      }
      console.log(`✅ ${element.name} inserted into wheels table`);
    });
  });
};

const seedInteriorTable = async () => {
  await createInteriorTable();

  data.interior.forEach((element) => {
    const query = `INSERT INTO interior (name, price, img_url) VALUES ($1, $2, $3)`;
    const values = [element.name, element.price, element.img_url];

    pool.query(query, values, (err, res) => {
      if (err) {
        console.log("⚠️ Error inserting interior data", err);
        return;
      }
      console.log(`✅ ${element.name} inserted into interior table`);
    });
  });
};

const seedData = async () => {
  await seedExteriorTable();
  await seedRoofTable();
  await seedWheelsTable();
  await seedInteriorTable();
};

const createCustomCarsTable = async () => {
  const query = `
  DROP TABLE IF EXISTS custom_cars;

  CREATE TABLE IF NOT EXISTS custom_cars (
      id SERIAL PRIMARY KEY,
      name VARCHAR(64),
      exterior INT,
      roof INT,
      wheels INT,
      interior INT,
      price INT
  )`;
  try {
    const res = await pool.query(query);
    console.log("🎉 Custom cars table created");
  } catch (err) {
    console.log("⚠️ Error creating custom cars table");
  }
};

// seedData();
createCustomCarsTable();
