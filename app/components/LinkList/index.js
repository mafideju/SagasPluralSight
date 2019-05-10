/* eslint-disable no-trailing-spaces */
import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
// import styles from './styles.css';

function LinkList({ links, routeTopicName }) {
  const linkNodes = links.map(link => (
    <Link 
      key={link.id}
      link={link}
      // description={link.description}
    />
  ));

  return (
    <div>
      {routeTopicName}
      {linkNodes}
    </div>
  );
}

LinkList.propTypes = {
  routeTopicName: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default LinkList;
