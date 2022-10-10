const mysql = require("mysql2");

class Database {
  conn: any;

  constructor() {
    this.conn = this.createConnection();
  }

  public createConnection() {
    return mysql.createConnection({
      host: "localhost",
      user: "ff",
      password: "1234",
      database: "grupo_a",
    });
  }

  public getConnection() {
    this.conn = this.createConnection();

    this.conn.connect();

    return this.conn;
  }
}

export default new Database();
