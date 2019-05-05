import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS_SUCCEEDEED, SELECT_TOPIC,
} from './constants';

const initialState = fromJS({
  topics: [],
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPICS_SUCCEEDEED:
      return state.set('topics', action.topics);
    case SELECT_TOPIC:
      return state.set('selectedTopics', action.topic);
    default:
      return state;
  }
}

export default navigationContainerReducer;
