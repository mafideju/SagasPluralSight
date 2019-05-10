import { takeLatest } from 'redux-saga';
import { REQUEST_TOPICS, SELECT_TOPIC } from './constants';
import { requestTopicsSucceed, requestTopicsFailed } from './actions';
import { call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';

export function fetchTopicsFromServer() {
  const request = fetch('http://localhost:3000/api/topics')
    .then(response => response.json());
  return request;
}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    yield put(requestTopicsSucceed(topics));
  } catch (e) {
    yield put(requestTopicsFailed(e.message));
  }
}

function* pushTopic(action) {
  yield put(push(`topics/${action.topic.name}`));
}

export function* selectTopicSaga() {
  yield* takeLatest(SELECT_TOPIC, pushTopic);
}

export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

export default [
  fetchTopicsSaga,
  selectTopicSaga,
];
