import {Command, flags} from '@oclif/command'

import {FeedbinBridgeApiServer} from '../server'
import {env} from 'process'

import * as _ from 'lodash'

export default class Server extends Command {
  static description = 'server daemon'

  static examples = [
    `$ feedbin-bridge-api server
`,
  ]

  static flags = {
    debug: flags.boolean({char: 'd', description: 'run with debugging'}),
  }

  static args = []

  async run() {
    // const config = Config.loadConfig(this.config.configDir)
    const {flags} = this.parse(Server)

    const debug = flags.debug || env.DEBUGGING === '1'
    const serverPort = _.toInteger(env.PORT) || 8080
    const todoistToken = env.TODOIST_API_KEY
    let todoistInboxLabelID: string|undefined|number = env.TODOIST_INBOX_LABEL_ID

    if (!_.isUndefined(todoistInboxLabelID)) {
      todoistInboxLabelID = _.toInteger(todoistInboxLabelID)
    }

    if (_.isUndefined(todoistToken)) {
      throw new TypeError('must set TODOIST_API_KEY')
    }

    const server = new FeedbinBridgeApiServer(debug,
      this.config.version,
      todoistToken,
      todoistInboxLabelID)
    server.start(serverPort)
  }
}
