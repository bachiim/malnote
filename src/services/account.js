import { getDb } from "./conn"

export const accountService = {
  async getAll() {
    const db = await getDb()
    return await db.select('SELECT * FROM accounts ORDER BY created_at DESC')
  },

  async create(payload) {
    const db = await getDb()
    const result = await db.execute(
      'INSERT INTO accounts (name, type, balance) VALUES (?, ?, ?)',
      [payload.name, payload.type, payload.balance ?? 0]
    )
    return result
  },

  async update(id, payload) {
    const db = await getDb()
    return await db.execute(
      'UPDATE accounts SET name=?, type=?, balance=?, updated_at=datetime("now") WHERE id=?',
      [payload.name, payload.type, payload.balance, id]
    )
  },

  async delete(id) {
    const db = await getDb()
    return await db.execute('DELETE FROM accounts WHERE id=?', [id])
  }
}