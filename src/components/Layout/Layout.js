import React from 'react';
import styles from './Layout.css';
import { Row, Col } from 'antd';

let isIndex = true;

//布局组件
function Layout({dispatch,children}) {
  console.log('children');
  console.log(children);
  return (
    <div className={styles.normal}>
      <Row className={styles.Row} type="flex" justify="space-around" align="middle">
        <Col className={styles.Col_Left} span={isIndex?24:7}>
          {children}
        </Col>
        {isIndex?'':<Col className={styles.Col_Right} span={isIndex?0:17}>
          {/* <MainRight children={children}>
          </MainRight> */}
        </Col>}
      </Row>
    </div>
  );
}

export default Layout;
