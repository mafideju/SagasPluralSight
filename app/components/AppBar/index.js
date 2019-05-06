import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import styles from './styles.css';
// import { toggleDrawer } from '../../containers/NavigationContainer/actions';

function AppBar({ toggleDrawer }) {
  return (
    <div className={styles.appBar}>
      <div
        className={styles.iconButton}
        onClick={toggleDrawer}
      >
        <FontAwesome className={styles.icon} name="bars" />
      </div>
      <div className={styles.heading}>Código Diário</div>
      <div className={styles.linkContainer}>Entrar</div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};

export default AppBar;
