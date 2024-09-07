const sql = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const trainingDatabasePath = process.env.TRAINING_DATABASE_URL || path.join('/tmp', 'training.db');

if (!fs.existsSync(trainingDatabasePath)) {
  const db = sql(trainingDatabasePath);

  db.prepare(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY,
      email TEXT UNIQUE,
      password TEXT
    );
  `).run();

  db.prepare(`
    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT NOT NULL PRIMARY KEY,
      expires_at INTEGER NOT NULL,
      user_id TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `).run();

  console.log('Training database initialized.');
} else {
  console.log('Training database already exists, skipping initialization.');
}
