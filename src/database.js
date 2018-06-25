import lowdb from 'lowdb'
import FileAsync from 'lowdb/adapters/FileAsync'

const db =
  lowdb(new FileAsync('db.json'))
    .then(db => { db.defaults({ posts: [] }).write(); return db })

export default db
