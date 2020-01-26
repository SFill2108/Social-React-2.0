import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return(
            <div >
                My post
                <div >
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className = {s.posts}>
                    <Post message ='Loktar ogar!'/>
                    <Post message ='FOR THE HORDE!!!'/>
                </div>
            </div>

    );
}

export default MyPosts  