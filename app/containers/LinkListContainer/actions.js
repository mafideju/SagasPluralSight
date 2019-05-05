import {
  REQUEST_LINKS_SUCCEED,
  REQUEST_LINKS_FAILED,
} from './constants';

export function requestLinksSucceed(links) {
  return {
    type: REQUEST_LINKS_SUCCEED,
    links,
  };
}

export function requestLinksFailed(message) {
  return {
    type: REQUEST_LINKS_FAILED,
    message,
  };
}
