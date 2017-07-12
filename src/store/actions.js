import * as events from './events'
import axios from 'axios'

export const testAction = (context) => {
  console.log(axios)
  context.commit(events.TEST_EVENT, 'test')
}
