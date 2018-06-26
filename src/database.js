import lowdb from 'lowdb'
import { dump as serialize, load as deserialize } from 'js-yaml'
import FileAsync from 'lowdb/adapters/FileAsync'

const db =
  lowdb(new FileAsync('db.yaml', { defaultValue: { posts: [] }, serialize, deserialize }))

export default db
