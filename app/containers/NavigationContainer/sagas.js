import { takeLatest } from 'redux-saga';
import { REQUEST_TOPICS } from './constants';
import { requestTopicsSucceed, requestTopicsFailed } from './actions';
import { call, put } from 'redux-saga/effects';

export function fetchTopicsFromServer() {
  const request = fetch('http://localhost:3000/api/topics')
    .then(response => response.json());
  return request;
}

function* fetchTopics() {
  try {
    const topics = yield call(fetchTopicsFromServer);
    // debugger;
    // console.log(topics);
    yield put(requestTopicsSucceed(topics));
  } catch (e) {
    yield put(requestTopicsFailed(e.message));
  }
}

export function* fetchTopicsSaga() {
  yield* takeLatest(REQUEST_TOPICS, fetchTopics);
}

export default [
  fetchTopicsSaga,
];
