import EditForm from './EditForm'
import TodoText from './TodoText'
import { Button } from 'react-bootstrap'
import { BiTrash } from "react-icons/bi";
function TodoItem({
    todo,
    toggleTodoCompleted,
    toggleTodoEditing,
    updateTodo,
    deleteTodo,
}){
    return (
        <div className="liStyle">
            <li className={todo.completed?'completed':'not-completed'}>
                <input type="checkbox" checked={todo.completed} onChange={()=>{
                    toggleTodoCompleted(todo.id)
                }} />
                {todo.editing?(
                    <EditForm id={todo.id} updateTodo={updateTodo} text={todo.text} />
                ):(
                    <TodoText id={todo.id} text={todo.text} toggleTodoEditing={toggleTodoEditing}/>
                )}
                <span onClick={()=>{
                    deleteTodo(todo.id)
                }}>
                   <BiTrash style={{width:'30px',height:'25px',cursor:'pointer'}} />
                </span>
            </li>
        </div>
    )
}
export default TodoItem