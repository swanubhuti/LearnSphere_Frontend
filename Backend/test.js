import { Client } from 'pg';

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'LMS',
  password: '#ted28sanv',
  port: 5432,
});

client.connect()
  .then(() => {
    console.log("✅ Connected to PostgreSQL successfully!");
    return client.end();
  })
  .catch(err => {
    console.error("❌ Failed to connect:", err.message);
  });
