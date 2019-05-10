/* eslint-disable no-trailing-spaces */
import React from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';
// import styles from './styles.css';

function LinkList({ links }) {
  const linkNodes = links.map(link => (
    <Link 
      key={link.id}
      link={link}
      // description={link.description}
    />
  ));

  return (
    <div>
      {linkNodes}
    </div>
  );
}

LinkList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default LinkList;
