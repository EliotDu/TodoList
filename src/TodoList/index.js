import TodoItem from './TodoItem'

function TodoList({
    todos,
    toggleTodoCompleted,
    toggleTodoEditing,
    updateTodo,
    deleteTodo,
    condition,
    searchKeyword,
  })
{
    
    return(
    <>
    <ul style={{fontSize:'18px',color:'rgba(0,0,0,0.5)'}}>
        {todos.filter((v,i)=>{
            if(condition === 'active')
                return !v.completed && v.text.includes(searchKeyword)
            if(condition === 'completed')
                return v.completed && v.text.includes(searchKeyword)

            return v.text.includes(searchKeyword)   
        })
        .map((v,i)=>{
            return (
                <TodoItem 
                    key={v.id}
                    todo={v}
                    toggleTodoCompleted={toggleTodoCompleted}
                    toggleTodoEditing={toggleTodoEditing}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                />
            )
        })}
    </ul>



    </>)
}
export default TodoList