import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import selectNavigationContainer from './selectors';
import Navigation from '../../components/Navigation';
import { requestTopics, selectTopic } from './actions';

// eslint-disable-next-line react/prefer-stateless-function
export class NavigationContainer extends Component {
  componentWillMount() {
    this.props.requestTopics();
  }

  render() {
    return (
      <Navigation {...this.props} />
    );
  }
}

const mapStateToProps = selectNavigationContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestTopics: () => dispatch(requestTopics()),
    selectTopic: (topic) => dispatch(selectTopic(topic)),
  };
}

NavigationContainer.propTypes = {
  requestTopics: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
