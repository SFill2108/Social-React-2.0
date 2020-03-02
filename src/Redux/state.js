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

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
}




export default store;
window.store = store;