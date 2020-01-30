import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let postData=[
        {id: 1, message: 'Loktar ogar!', likesCount: 2},
        {id: 2, message: 'FOR THE HORDE!!!', likesCount: 17},

    ]
    return(
            <div className={s.postsBlock}>
                <h2>My post</h2>
                <div >
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className = {s.posts}>
                    <Post message ={postData[0].message} likeCount={postData[0].likeCount}/>
                    <Post message ={postData[1].message} likeCount={postData[1].likeCount}/>
                </div>
            </div>

    );
}

export default MyPosts  