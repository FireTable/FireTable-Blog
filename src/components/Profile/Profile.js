import React from 'react';
import styles from './Profile.css';
import config from'../../config.json';
import { Button, notification, Icon } from 'antd';

const profile = config.profile;





//简介控件
function Profile() {
  return (
    <div className={styles.normal}>
      <img src={profile.icon}/>
      <h1>{profile.author}</h1>
      <span>{profile.motto}</span>
      <hr className={styles.line}/>
      <p>{profile.introduce}</p>
      <hr className={styles.line}/>
      <p>
        <a href={profile.newEventSrc}>{profile.extra}</a>
      </p>
      {notification.open({
          message: '_(:з」∠)_一条比较重要的消息',
          description: '个人博客正在使用React重构中！所以暂时只能看到首页啦！',
          icon: <Icon  type="edit" style={{ color: '#FF3300' }} />,
          duration:null
        })}

    </div>
  );
}

export default Profile;
