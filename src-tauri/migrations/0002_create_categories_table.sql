CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR NOT NULL,
  type VARCHAR,
  settings JSON,
  created_at TIMESTAMP NOT NULL DEFAULT (datetime('now')),
  updated_at TIMESTAMP NOT NULL DEFAULT (datetime('now'))
);