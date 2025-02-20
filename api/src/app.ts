import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import routes from './routes'
import database from './database'

class App {
  public express: express.Application

  /**
   * App
   */
  constructor() {
    dotenv.config()
    database.createConnection()
    this.express = express()
    this.routes()
  }

  /**
   * routes
   */
  private routes(): void {
    this.express.use(express.json())
    this.express.use(cors({ origin: '*' }))
    this.express.use(routes)
  }
}

export default new App().express
