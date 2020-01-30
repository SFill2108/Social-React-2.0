import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div>
            <div>
                <img src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    );
}

export default ProfileInfo