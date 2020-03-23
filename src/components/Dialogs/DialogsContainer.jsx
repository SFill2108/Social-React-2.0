import React from 'react';
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs'


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage 

    let onSendMassageClick = () =>{
        props.store.dispatch(sendMessageCreator()); 
    }
    let onNewMessageChange = (body) =>{
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return(
        <Dialogs updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMassageClick}
            dialogsPage={state}   />
    );
}

export default DialogsContainer