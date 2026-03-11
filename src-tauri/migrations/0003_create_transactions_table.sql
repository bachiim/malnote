CREATE TABLE IF NOT EXISTS transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  account_id INTEGER NOT NULL,
  category_id INTEGER,
  transfer_id VARCHAR,
  type VARCHAR,
  amount REAL NOT NULL,
  note TEXT,
  date date NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT (datetime('now')),
  updated_at TIMESTAMP NOT NULL DEFAULT (datetime('now')),

  FOREIGN KEY (account_id) REFERENCES accounts(id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);