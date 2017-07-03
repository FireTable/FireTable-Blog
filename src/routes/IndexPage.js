import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import LayoutComponent from '../components/Layout/Layout';
import ProfileComponent from '../components/Profile/Profile';

function IndexPage({ dispatch,children}) {
  return (
    <div className={styles.normal}>
      <LayoutComponent dispatch={dispatch} children={children}>
        <ProfileComponent/>
      </LayoutComponent>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
