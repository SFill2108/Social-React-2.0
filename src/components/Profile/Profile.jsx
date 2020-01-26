import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return(
        <div>
            <div>
                <img src="http://qnimate.com/wp-content/uploads/2014/03/images2.jpg" alt=""/>
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile