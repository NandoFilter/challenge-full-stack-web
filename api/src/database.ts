import Connection from 'mysql2/typings/mysql/lib/Connection'

const mysql = require('mysql2')

class Database {
  conn: Connection | undefined

  /**
   * Database
   */
  constructor() {
    this.conn = this.createConnection()
  }

  /**
   * createConnection
   *
   * @returns Connection | undefined
   */
  public createConnection(): Connection | undefined {
    const host = process.env.DB_HOST
    const user = process.env.DB_USER
    const pass = process.env.DB_PASS
    const name = process.env.DB_NAME

    if (host && user && name) {
      return mysql.createConnection({
        host: host,
        user: user,
        password: pass,
        database: name
      })
    }
  }

  /**
   * getConnection
   *
   * @returns Connection | undefined
   */
  public getConnection(): Connection | undefined {
    this.conn = this.createConnection()

    if (this.conn) {
      this.conn.connect()
    }

    return this.conn
  }
}

export default new Database()
