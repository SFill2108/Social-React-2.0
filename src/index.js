import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    { id: 1, message: 'Hi how are you', likesCount: 12 },
    { id: 2, message: 'fghfgh', likesCount: 6 },
    { id: 3, message: 'jkhhjkhjkhj', likesCount: 3 },
    { id: 4, message: 'aaaaaaaaaaa', likesCount: 0 },

]

let dialogsData = [
    { id: 1, name: 'Denis' },
    { id: 2, name: 'Masha' },
    { id: 3, name: 'Dima' },
    { id: 4, name: 'Vladik' },
]

let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Helloy' },
    { id: 3, message: 'Yo!' },
    { id: 4, message: 'Whats upp?' },
]

ReactDOM.render( < App posts = { posts } dialogs = { dialogsData } messages = { messages } /> , document.getElementById('root'));

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();