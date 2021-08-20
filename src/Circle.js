import React, {useState} from "react";

const Circle = () => {
    const [count, setCount] = useState('')
// [count, setCount] 1-я значения Переменная 2-я функция
    const cir =() => {
        setCount('Круг')
    }
    const squ = () =>{
        setCount('Квадрат')

    }
   return (
      <>
          <button onClick={cir}>Circle</button>
          <span>{count}</span>
          <button onClick={squ}>Square</button>
      </>
   )
}
export default Circle