import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { sidebarReducer } from "./sidebar-reducer";

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

        dialogsPage: {
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
            newMessageBody: 'do it!',
        },

        sidebar: {},

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    },
}

export default store;
window.store = store;