import React from 'react';
import styles from './Profile.css';
import config from'../../config.json';

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
    </div>
  );
}

export default Profile;
