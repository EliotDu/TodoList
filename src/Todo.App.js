import { useState } from 'react'
import './Todo.App.scss'
import Button from 'react-bootstrap/Button'
import AddForm from './AddForm'
import TodoList from './TodoList/index'
import { BiSearchAlt } from "react-icons/bi";
const sample = [
  {
    id: Math.floor(Math.random()*100),
    text: '工作',
    completed: false,
    editing: false,
  },
  { id: Math.floor(Math.random()*100), text: '健身', completed: false, editing: false },
]
function TodoApp() {
  // 記錄所有的todos
  const [todos, setTodos] = useState(sample)

  // 呈現用(經搜尋或過濾用)
  //const [todosDisplay, setTodosDisplay] = useState(sample)

  // 使用全app過濾條件 'all' | 'active' | 'completed'
  const [condition, setCondition] = useState('all')

  const [inputKeyword, setInputKeyword] = useState('')

  const [searchKeyword, setSearchKeyWord] = useState('')

  const addTodo = (text) => {

    const newTodo = {
      id: Math.floor(Math.random()*100),
      text: text,
      completed: false,
      editing: false,
    }
    // 加入輸入的文字到todos陣列中
    // 三步驟的方式(拷貝 -> 加入到新陣列中 -> 設定回state)
    const newTodos = [newTodo, ...todos]

    setTodos(newTodos)
  }

  // 用在某個id項目，切換completed屬性true/false
  const toggleTodoCompleted = (id) => {
    const newTodos = todos.map((v, i) => {
      if (v.id === id) return { ...v, completed: !v.completed }

      return { ...v }
    })

    setTodos(newTodos)
  }

  // 用在某個id項目，切換editing屬性true/false
  const toggleTodoEditing = (id) => {
    const newTodos = todos.map((v, i) => {
      if (v.id === id) return { ...v, editing: !v.editing }
      //這裡要設定其它項目 editing:false，同時間只有一個被編輯
      return { ...v, editing: false }
    })

    setTodos(newTodos)
  }

  // 用在某個id項目改變為某值用，儲存新的值用
  const updateTodo = (id, objectValue) => {
    const newTodos = todos.map((v, i) => {
      if (v.id === id) return { ...v, ...objectValue }

      return { ...v }
    })

    setTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const newTodos = todos.filter((v, i) => {
      return v.id !== id
    })

    setTodos(newTodos)
  }

  return (
    <div className="myTodoList">
    <div className="content">
      <div style={{textAlign:'center',padding:'10px'}} className="title">TODO LIST</div>
      <div style={{textAlign:'center',height:'60px'}}>
          <AddForm addTodo={addTodo} />
      </div>
      <div style={{textAlign:'center',padding:'10px',marginBottom:'20px'}}>
        <input
          style={{width:'290px',height:'40px',borderRadius:'10px',border:'none'}}
          type="text"
          value={inputKeyword}
          placeholder=""
          onChange={(e) => {
            setInputKeyword(e.target.value)
          }}
        />
          <span
          style={{margin:0 ,padding:0,cursor:'pointer'}}
          variant="outline-info"
          onClick={() => {
            setSearchKeyWord(inputKeyword)
          }}
        >
          <BiSearchAlt style={{width:'60px',height:'30px',color:'#696969'}}/>
        </span>
      </div>
      <hr className="line"/>
      <div style={{display:'flex',marginTop:'30px',justifyContent:'center'}}>
      <Button
        variant="outline"
        onClick={() => {
          setCondition('all')
          //setTodosDisplay(todos)
        }}
      >
       All
      </Button>
      <Button
       
        variant="outline"
        onClick={() => {
          setCondition('active')
        }}
      >
        Active
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          setCondition('completed')
        }}
      >
        Completed
      </Button>
    </div>
      <TodoList
        todos={todos}
        searchKeyword={searchKeyword}
        condition={condition}
        toggleTodoCompleted={toggleTodoCompleted}
        toggleTodoEditing={toggleTodoEditing}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
      
    </div>
    </div>
  )
}

export default TodoApp
