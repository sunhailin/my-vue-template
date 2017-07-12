import * as events from './events'

const mutations = {
  [events.TEST_EVENT]: function(state, data) {
    state.test = data
  }
}
export default mutations
