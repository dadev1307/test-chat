import React, {useContext, useEffect, useRef} from "react";
import {MessagesContext} from "./App";

export default function MessagesOutput() {
  const messages =  useContext(MessagesContext);
  /**
   * Добавили реф для скролла
   */
  const r = useRef(null);

  /**
   * Если компонент перерисовывается, то скролим до последнего сообщения
   */
  useEffect(()=>{
    r.current.scrollIntoView({ behavior: "smooth" });
  })

  return (
    <div className={'messages-output'}>
      {messages.map(item => {
        return <div key={item.id} className={'messages-output__item'}>{item.text}</div>
      })}
      <span ref={r} />
    </div>
  );
}