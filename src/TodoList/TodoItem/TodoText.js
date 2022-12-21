function TodoText({ id, text, toggleTodoEditing }) {
    return (
      <>
        <span 
          onDoubleClick={() => {
            toggleTodoEditing(id)
          }}
        >
          {text}
        </span>
      </>
    )
  }
  
  export default TodoText
  