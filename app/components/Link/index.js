import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

function Link({ link }) {
  return (
    <div className={styles.link}>
      <div className={styles.votingContainer}>
        <div className={styles.votingCount}>
          {link.voteCount}
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.linkAnchor} href={link.url}>{link.url}</div>
        <div className={styles.description}>{link.description}</div>
      </div>
    </div>
  );
}

Link.propTypes = {
  link: PropTypes.shape({
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default Link;
