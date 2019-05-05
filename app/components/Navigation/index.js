import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

function Navigation({ topics, selectTopic }) {
  const topicNodes = topics.map(topic => (
    <div
      key={topic.name}
      onClick={() => selectTopic(topic)}
    >{topic.name}</div>
  ));
  return (
    <div>
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
};

export default Navigation;
