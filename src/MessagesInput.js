import React, {useState} from "react";
import {db} from "./firebase";

export default function MessagesInput() {
  const [text, setText] = useState('');
  /**
   * @param e - event на keyDown
   * Проверяю нажимали на 'Enter' если да то добавляем сообщение в бд и обнуляем поле для ввода сообщения
   */
  const enterSubmit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const msg = db.collection('messages').doc(''+Date.now());
      msg.set({text, date: Date.now()});
      setText('');
    }

  }


  return (
    <div className={"messages-input"}>
      <textarea value={text} onChange={ event => setText(event.target.value)} placeholder={'Введите сообщение'} onKeyDown={enterSubmit}>

      </textarea>
    </div>
  )
}