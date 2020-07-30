import {Controller, Get, ClassMiddleware} from '@overnightjs/core'
import {Logger} from '@overnightjs/logger'
import {Request, Response} from 'express'
import {OK, BAD_REQUEST} from 'http-status-codes'

import {requestIdMiddleware, REQUEST_ID_HEADER_NAME} from '../middlewares/request-id'
import {TodoistStore} from '../stores/todoist'
import * as _ from 'lodash'

@Controller('feedbin')
@ClassMiddleware([requestIdMiddleware])
export default class FeedbinController {
  private todoistStore: TodoistStore

  constructor(todoistStore: TodoistStore) {
    this.todoistStore = todoistStore
    Logger.Info('FeedbinController added')
  }

  @Get('todoist')
  private async get(req: Request, res: Response) {
    const requestId = res.getHeader(REQUEST_ID_HEADER_NAME)
    Logger.Info(`[${requestId}] GET /feedbin/todoist`)

    const title = req.query.title
    const url = req.query.url
    const source = req.query.source
    const priority = req.query.priority || 1
    if (_.isEmpty(url)) {
      return res.status(BAD_REQUEST).json({error: 'Did not send url'})
    }
    const content = `${title} - ${url} - ${source}`
    try {
      const r = await this.todoistStore.createNewTask(content, priority as number, requestId as string)
      const result: any = {}
      result.requestId = requestId
      result.sentToTodoist = false
      result.newTaskResult = r

      return res.status(OK).json(result)
    } catch (error) {
      return res.status(BAD_REQUEST).json({error: error})
    }
  }
}
