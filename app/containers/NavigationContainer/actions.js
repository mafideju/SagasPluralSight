import {
  REQUEST_TOPICS,
  REQUEST_TOPICS_SUCCEEDEED,
  REQUEST_TOPICS_FAILED,
  SELECT_TOPIC,
} from './constants';

export function requestTopics() {
  return {
    type: REQUEST_TOPICS,
  };
}

export function requestTopicsSucceed(topics) {
  return {
    type: REQUEST_TOPICS_SUCCEEDEED,
    topics,
  };
}

export function requestTopicsFailed(message) {
  return {
    type: REQUEST_TOPICS_FAILED,
    message,
  };
}

export function selectTopic(topic) {
  return {
    type: SELECT_TOPIC,
    topic,
  };
}
