import Database from '@tauri-apps/plugin-sql';

let db = null;

export async function getDb() {
  if (!db) {
    db = await Database.load('sqlite:malnote.db')
  }
  return db;
}