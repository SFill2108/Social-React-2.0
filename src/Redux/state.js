const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi how are you', likesCount: 12 },
                { id: 2, message: 'fghfgh', likesCount: 6 },
                { id: 3, message: 'jkhhjkhjkhj', likesCount: 3 },
                { id: 4, message: 'aaaaaaaaaaa', likesCount: 0 },

            ],
            newPostText: "Hello",
        },

        messagesPage: {
            dialogs: [
                { id: 1, name: 'Denis' },
                { id: 2, name: 'Masha' },
                { id: 3, name: 'Dima' },
                { id: 4, name: 'Vladik' },
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Helloy' },
                { id: 3, message: 'Yo!' },
                { id: 4, message: 'Whats upp?' },
            ],
            newMessageText: 'do it!',
        }
    },
    _callSubscriber() {
        console.log('345345');
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer; //получаем observer(паттерн, данные об изменении ) в index.js 
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.messagesPage.newMessageText,
            }
            this._state.messagesPage.messages.push(newMessage);
            this._state.messagesPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.messagesPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }

    },
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }

}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }

}
export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }

}

export default store;
window.store = store;