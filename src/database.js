import lowdb from 'lowdb'
import fileAsyncStorage from 'lowdb/lib/storages/file-async'

const db = lowdb('db.json', {
  storage: fileAsyncStorage,
  format: { serialize: o => JSON.stringify(o) }
})

db.defaults({ posts: [] }).write()

export default db
