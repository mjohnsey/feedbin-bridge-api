import {Server as OvernightServer} from '@overnightjs/core'
import {Logger} from '@overnightjs/logger'
import * as express from 'express'

import BaseController from './controllers/base'
import {TodoistStore} from './stores/todoist'
import FeedbinController from './controllers/feedbin'

export class FeedbinBridgeApiServer extends OvernightServer {
  public version: string

  public todoistToken: string

  public todoistInboxLabelID: number | undefined

  constructor(debug: boolean,
    version: string,
    todoistToken: string,
    todoistInboxLabelID: number|undefined = undefined) {
    super(debug)
    this.version = version
    this.todoistToken = todoistToken
    this.todoistInboxLabelID = todoistInboxLabelID
    this.app.use(express.json({type: '*/*'}))
    this.setupControllers()
  }

  public start(port = 8080): void {
    this.app.listen(port, () => {
      Logger.Imp(`Server running: http://localhost:${port}`)
    })
  }

  private setupControllers(): void {
    const controllers = []

    const todoistStore = new TodoistStore(this.todoistToken, this.todoistInboxLabelID)
    controllers.push(new FeedbinController(todoistStore))

    super.addControllers(controllers)

    // Add last
    super.addControllers(new BaseController(this.version))
  }
}
