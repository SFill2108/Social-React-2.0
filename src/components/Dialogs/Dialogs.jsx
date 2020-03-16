import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../Redux/dialogs-reducer';


const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage 
    let dialogsElements =  state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;
    let onSendMassageClick = () =>{
        props.store.dispatch(sendMessageCreator()); 
    }
    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>
                    {dialogsElements}
                </div>
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div className={s.inputMessage} >
                    <div><textarea onChange={onNewMessageChange} value = {newMessageBody} /></div>
                    <div><button onClick={onSendMassageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs