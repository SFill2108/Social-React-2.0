const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}
export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 5, message: body });
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}
export default dialogsReducer;