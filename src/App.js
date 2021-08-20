//props - это данные которые прихотят в компонент из вне(из дочернего не передается в родительский)
// файл компонент с большой буквы
// i++ - increment
// i-- - decincrement
import React from "react";
import Form from "../../react-app3/react-app3/src/Form";
import Catalog from "./Catalog";

function App() {
  return (
    <div>
        {/*<Form />*/}
    {/*<Counter />*/}
    {/*  <Circle />*/}
        <Catalog />
        <Form />
    </div>
  );
}

export default App;
