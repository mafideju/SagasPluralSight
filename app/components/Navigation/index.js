import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
import AppBar from '../AppBar';

function Navigation({ topics, selectTopic, toggleDrawer }) {
  const topicNodes = topics.map(topic => (
    <div
      key={topic.name}
      onClick={() => selectTopic(topic)}
    >{topic.name}</div>
  ));
  return (
    <div>
      <AppBar toggleDrawer={toggleDrawer} />
      <h1>
        Temos agora {topics.length} tópicos na lista.
      </h1>
      <ol className={styles.list}>
        {topicNodes}
      </ol>
    </div>
  );
}

Navigation.propTypes = {
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectTopic: PropTypes.func.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};

export default Navigation;
