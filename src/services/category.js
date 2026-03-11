import { getDb } from "./conn"

export const categoryService = {
  async getAll() {
    const db = await getDb()
    return await db.select('SELECT * FROM categories ORDER BY created_at DESC')
  },

  async get(id) {
    const db = await getDb()
    const result = await db.select('SELECT * FROM categories WHERE id=?', [id])
    return result[0] ?? null
  },

  async create(payload) {
    const db = await getDb()
    const result = await db.execute(
      'INSERT INTO categories (name, type, settings) VALUES (?, ?, ?)',
      [payload.name, payload.type, payload.settings]
    )
    return result
  },

  async update(id, payload) {
    const db = await getDb()
    return await db.execute(
      'UPDATE categories SET name=?, type=?, settings=?, updated_at=datetime("now") WHERE id=?',
      [payload.name, payload.type, payload.settings, id]
    )
  },

  async delete(id) {
    const db = await getDb()
    return await db.execute('DELETE FROM categories WHERE id=?', [id])
  }
}