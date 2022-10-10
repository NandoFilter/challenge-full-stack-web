import express from "express";
import routes from "./routes";
import database from "./database";
class App {
  public express: express.Application;

  constructor() {
    database.createConnection();
    this.express = express();
    this.routes();
  }

  private routes(): void {
    this.express.use(express.json());
    this.express.use(routes);
  }
}

export default new App().express;
