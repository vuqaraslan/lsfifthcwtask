export default function ToDo(props) {

  return (
    <section className='todo-section' key={props.id} onClick={()=>{props.handleConfirmClick(props.todo.id)}}>
        {props.todo.isDone && <button className='finished-btn'>v</button>}
        {props.todo.isDone ? <h1><s>{props.todo.todoName}</s></h1> : <h1>{props.todo.todoName}</h1> }
        <button className='remove-btn' onClick={()=>{
            props.handleRemoveClick(props.index)
        }}>x</button>
    </section>
  )
}
