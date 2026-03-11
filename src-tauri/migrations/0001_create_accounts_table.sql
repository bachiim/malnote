CREATE TABLE IF NOT EXISTS accounts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR NOT NULL,
  type VARCHAR,
  balance REAL DEFAULT 0,
  settings JSON,
  created_at TIMESTAMP NOT NULL DEFAULT (datetime('now')),
  updated_at TIMESTAMP NOT NULL DEFAULT (datetime('now'))
);