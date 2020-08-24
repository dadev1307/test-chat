import React, {useState, useEffect} from 'react';
import { db } from "./firebase";
import MessagesOutput from "./MessagesOutput";
import './App.less';
import MessagesInput from "./MessagesInput";

/**
 * Создаём контекст для сообщений
 * @type {React.Context<Array>}
 */
export const MessagesContext = React.createContext();

function App() {

  /**
   * Создаём стейт для хранении сообщений
   * @param messages - сообщения
   * @param setMessages - сеттер для изменения messages
   */
  const [messages, setMessages] = useState([]);

  /**
   * Хук аналогичниый mounted (единожды запускается когда создаётся компонент)
   * @param db - база дынных сообщений
   * Подключаемся к базе firestore -> получаем все документы из коллекции "messages"
   * @param onSnapshot - метод для горячего обновления, если коллекция изменилась то получаем все документы
   * дальше пробегаемся по документам, получаем данные из документов и перезаписываем стейт
   */
  useEffect(()=>{
    db.collection("messages").onSnapshot((snap)=> {
      const res = [];
      snap.forEach(doc => {
        const info = doc.data();
        res.push({id: doc.id, ...info});
      })
      setMessages(res);
    });
  },[]);


  return (
    <MessagesContext.Provider value={messages}>
      <div className={'container'}>
        <MessagesOutput />
        <MessagesInput />
      </div>
    </MessagesContext.Provider>
  );
}

export default App;
