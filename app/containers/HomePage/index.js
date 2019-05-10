import React from 'react';
import PropTypes from 'prop-types';
import NavigationContainer from '../../containers/NavigationContainer';

// eslint-disable-next-line react/prefer-stateless-function
export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavigationContainer />
        {this.props.children}
      </div>
    );
  }
}

HomePage.propTypes = {
  children: PropTypes.object,
};
