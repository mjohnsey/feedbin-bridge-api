import * as _ from 'lodash'
import axios from 'axios'
import * as uuid from 'uuid'

export class TodoistStore {
  private apiKey: string

  private inboxLabelID: number|undefined

  constructor(apiKey: string, inboxLabelID: number|undefined = undefined) {
    this.apiKey = apiKey
    this.inboxLabelID = inboxLabelID
  }

  public async createNewTask(content: string, priority = 1, requestId: string = uuid.v4(), labelID = this.inboxLabelID) {
    // https://developer.todoist.com/rest/v1/?shell#create-a-new-task
    const body: any = {
      content: content,
      priority: priority,
    }
    if (!_.isUndefined(labelID)) {
      body.label_ids = [labelID]
    }
    const headers: any = {
      'X-Request-Id': requestId,
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json;charset=UTF-8',
    }
    const r = await axios.post('https://api.todoist.com/rest/v1/tasks', body, 
      {
        headers: headers,
      })
    return r.data
  }
}
