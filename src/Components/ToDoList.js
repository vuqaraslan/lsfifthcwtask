import React, { useRef, useState } from 'react'
import './ToDoList.css'
import ToDo from './ToDo';

export default function ToDoList() {

  const [todoName,setToDoName]=useState('');
  const [toDoList,setToDoList]=useState([]);
  
  let id=0;

  function handleAddClick(){
    if(todoName.trim()!==''){
      setToDoList([
        ...toDoList,
        {
            id:id++,
            todoName:todoName,
            isDone:isClicked
        }
      ]);
      setToDoName('');
      console.log(id);
    }
  }

  function handleRemoveClick(indexNum){
    let newList=toDoList.filter((t,index)=>index!==indexNum);
    setToDoList(newList);
  }

  const [isClicked,setIsClicked]=useState(false);

  function handleConfirmClick(id){

    setIsClicked(!isClicked);
    console.log('isClicked >> '+isClicked);
    console.log('isClicked with isDone >> '+toDoList.find((td)=>td.id===id).isDone);
    toDoList.forEach((td)=>{
        if(td.id===id){
            td.isDone=isClicked
            console.log('in foreach >> '+td.isDone);
        }
    });

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
              <ToDo todo={todo} index={index} id={id+=1} toDoList={toDoList} handleRemoveClick={handleRemoveClick}
                handleConfirmClick={handleConfirmClick}
              ></ToDo>
          ))
        }
      </section>

    </section>
  )
}
