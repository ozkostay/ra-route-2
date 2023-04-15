import React from "react";

export default function BottomView({fnEdit, fnDelete}) {

  return (
    <div>
      <button onClick={fnEdit}>Изменить</button>
      <button onClick={fnDelete} style={{backgroundColor: '#b04546'}}>Удалить</button>
    </div>
  ) 
}
