import React from 'react';
import NavigationContainer from '../../containers/NavigationContainer';
import LinkListContainer from '../../containers/LinkListContainer';

// eslint-disable-next-line react/prefer-stateless-function
export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavigationContainer />
        <LinkListContainer />
      </div>
    );
  }
}
