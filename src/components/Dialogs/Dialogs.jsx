import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Денис
                </div>
                <div className={s.dialog}>
                    Маша
                </div>
                <div className={s.dialog}>
                    Дима
                </div>
                <div className={s.dialog}>
                    Саня
                </div>
                <div className={s.dialog}>
                    Гизмо
                </div>
                <div className={s.dialog}>
                    Соболь
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Helloy</div>
                <div className={s.message}>LOL</div>
            </div>
        </div>
    );
}

export default Dialogs