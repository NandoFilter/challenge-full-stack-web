const mysql = require('mysql2')

class Database {
  conn: any

  constructor() {
    this.conn = this.createConnection()
  }

  public createConnection() {
    const host = process.env.DB_HOST
    const user = process.env.DB_USER
    const pass = process.env.DB_PASS
    const name = process.env.DB_NAME

    if (host && user && pass && name) {
      return mysql.createConnection({
        host: host,
        user: user,
        password: pass,
        database: name
      })
    }
  }

  public getConnection() {
    this.conn = this.createConnection()

    this.conn.connect()

    return this.conn
  }
}

export default new Database()
