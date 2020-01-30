import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogItem';
import Message from './Message/Message';


const Dialogs = () => {

    let dialogsData =[
        {id:1, name: 'Denis'},
        {id:2, name: 'Masha'},
        {id:3, name: 'Dima'},
        {id:4, name: 'Vladik'},
    ]

    let messages =[
        {id:1, message: 'Hi'},
        {id:2, message: 'Helloy'},
        {id:3, message: 'Yo!'},
        {id:4, message: 'Whats upp?'},
    ]

    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = messages.map(m => <Message message={m.message}/> );

    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>
                    {dialogsElements}
                </div>
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs