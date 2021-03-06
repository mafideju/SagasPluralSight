import React from 'react';
import { connect } from 'react-redux';
import { requestLinks } from './actions';
import selectLinkListContainer from './selectors';
// import styles from './styles.css';
import LinkList from '../../components/LinkList';

export class LinkListContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <LinkList {...this.props} />
    );
  }
}

const mapStateToProps = selectLinkListContainer();

function mapDispatchToProps(dispatch) {
  return {
    requestLinks: () => dispatch(requestLinks(dispatch)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkListContainer);
