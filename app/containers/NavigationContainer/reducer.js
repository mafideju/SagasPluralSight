import { fromJS } from 'immutable';
import {
  REQUEST_TOPICS_SUCCEEDEED, SELECT_TOPIC, TOGGLE_DRAWER,
} from './constants';

const initialState = fromJS({
  topics: [],
  isDrawerOpen: false,
});

function navigationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_TOPICS_SUCCEEDEED:
      return state.setIn(['topics'], action.topics);
    case SELECT_TOPIC:
      return state.setIn(['selectedTopics'], action.topic).set('isDrawerOpen', false);
    case TOGGLE_DRAWER:
      return state.setIn(['isDrawerOpen'], !state.get('isDrawerOpen'));
    default:
      return state;
  }
}

export default navigationContainerReducer;
