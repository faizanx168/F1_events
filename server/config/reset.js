import { pool } from "../config/database.js";
import "../config/dotenv.js";
import eventData from "../data/events.js";

const createEventsTable = async () => {
  const createTableQuery = `
    DROP TABLE IF EXISTS f1events;

    CREATE TABLE IF NOT EXISTS f1events (
      id SERIAL PRIMARY KEY,
      date DATE NOT NULL,
      event VARCHAR(255) NOT NULL,
      location VARCHAR(255) NOT NULL,
      time DATE NOT NULL,
      channel VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL
    )
  `;

  try {
    await pool.query(createTableQuery);
    console.log("🎉 Events table created successfully");
  } catch (err) {
    console.error("⚠️ error creating Events table", err);
  }
};

const seedEventsTable = async () => {
  await createEventsTable();

  eventData.forEach((event) => {
    const insertQuery = {
      text: "INSERT INTO f1events (date,event,location,time,channel,image) VALUES ($1, $2, $3, $4, $5, $6)",
    };

    const values = [
      event.date,
      event.event,
      event.location,
      event.time,
      event.channel,
      event.image,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting Event", err);
        return;
      }
      console.log(`✅ ${event.event} added successfully`);
    });
  });
};

seedEventsTable();
