import {useState} from 'react'

function EditForm({id,updateTodo,text}){

 const [isComposition, setIsComposition] = useState(false)

  const [inputEditingValue, setInputEditingValue] = useState(text)
    return(<>
        <input type="text" value={inputEditingValue}
          style={{width:'150px',height:'33px',borderRadius:'10px',border:'none'}}
         onChange={(e)=>{
            setInputEditingValue(e.target.value)
        }}
        onKeyDown={(e)=>{
            if(e.key === 'Enter' && isComposition === false){
                updateTodo(id,{
                    text:inputEditingValue,
                    editing:false
                })
            }
        }} />
    </>)
}

export default EditForm