import * as serviceWorker from './serviceWorker';
import state, {subscribe} from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './Redux/state';
import {BrowserRouter} from 'react-router-dom';


let rerenderEntireTree = (state) => {
    ReactDOM.render( 
    < BrowserRouter >
        <App state = { state } addPost = { addPost } updateNewPostText={updateNewPostText}/>  
    </BrowserRouter > , document.getElementById('root'));
    }
rerenderEntireTree(state);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(state);

subscribe(rerenderEntireTree); // callback в state.js во избежание зацикливания