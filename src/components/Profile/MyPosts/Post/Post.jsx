import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return(
            <div className = {s.item}>
                <img src="https://cs7.pikabu.ru/post_img/big/2018/06/15/7/1529058241137066453.png" alt=""/>
                {props.message}
                <div>
                    <span>likes {props.likeCount}</span>
                </div>
            </div>
            
    );
}

export default Post