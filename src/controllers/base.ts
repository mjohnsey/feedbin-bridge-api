import {Controller, Get, ClassMiddleware} from '@overnightjs/core'
import {Logger} from '@overnightjs/logger'
import {Request, Response} from 'express'
import {OK} from 'http-status-codes'

import {requestIdMiddleware, REQUEST_ID_HEADER_NAME} from '../middlewares/request-id'

@Controller('/')
@ClassMiddleware([requestIdMiddleware])
export default class BaseController {
  public serverVersion: string

  constructor(serverVersion: string) {
    this.serverVersion = serverVersion
    Logger.Info('BaseController added')
  }

  @Get('')
  private get(req: Request, res: Response) {
    const requestId = res.getHeader(REQUEST_ID_HEADER_NAME)
    Logger.Info(`[${requestId}] GET /`)
    const result: any = {}
    result.server = {
      serverVersion: this.serverVersion,
    }
    result.requestId = requestId

    return res.status(OK).json(result)
  }
}
