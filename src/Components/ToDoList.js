import React, { useRef, useState } from 'react'
import './ToDoList.css'

export default function ToDoList() {

  const [todoName,setToDoName]=useState('');
  const [toDoList,setToDoList]=useState([]);
  const [isClicked,setIsClicked]=useState(false);
  let id=0;

  function handleAddClick(){
    if(todoName.trim()!==''){
      setToDoList([
        ...toDoList,
        todoName
      ]);
      setToDoName('');
      console.log(id);
    }
  }

  function handleRemoveClick(indexNum){
    let newList=toDoList.filter((t,index)=>index!==indexNum);
    setToDoList(newList);
  }

  function handleConfirmClick(){
    setIsClicked(!isClicked);
  }

  return (
    <section className='base-section'>
      <input value={todoName} placeholder='Enter todo name' onChange={(e)=>{
        setToDoName(e.target.value)
      }}/>
      <button onClick={handleAddClick}>Add Item</button>
      <section className='todoList-section'>
        {
          toDoList.map((todo,index)=>(
            <section className='todo-section' key={id+=1} onClick={()=>{handleConfirmClick()}}>
              {isClicked && <button className='finished-btn'>v</button>}
              {isClicked ? <h1><s>{todo}</s></h1> : <h1>{todo}</h1> }
              <button className='remove-btn' onClick={()=>{
                handleRemoveClick(index);
              }}>x</button>
              </section>
          ))
        }
      </section>

    </section>
  )
}
