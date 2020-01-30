import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    let posts=[
        {id: 1, message: 'Loktar ogar!', likesCount: 2},
        {id: 2, message: 'FOR THE HORDE!!!', likesCount: 17},
    ]

    let postsElements = posts.map (p => <Post message ={p.message} likeCount={p.likesCount}/>);
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
                    {postsElements}
                </div>
            </div>

    );
}

export default MyPosts  