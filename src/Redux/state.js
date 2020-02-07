import { rerenderEntireTree } from "../render";

let state = {
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
};

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state);
}
export default state;