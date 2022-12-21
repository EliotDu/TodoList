import {useState} from 'react'

function AddForm({addTodo}){

    const [inputValue,setInputValue]=useState('')

    const [isComposition,setIsComposition]=useState(false)

    return(
        <div style={ {height:'60px',padding:'10px'}}>
            <input type="text" value={inputValue}
            style={{width:'350px',height:'40px',borderRadius:'10px',border:'none'}}
            placeholder="add todo ..." onChange={(e)=>{
                setInputValue(e.target.value)
            }}
            
            onCompositionStart={()=>{
                setIsComposition(true)
            }}
            onCompositionEnd={()=>{
                setIsComposition(false)
            }}
            
            onKeyDown={(e)=>{
                //中文輸入期間不會加入到列表中
                if(e.key === 'Enter' && isComposition === false){
                  addTodo(e.target.value)
                //清除文字輸入框
                  setInputValue('')
                }
            }}>
                
            </input>
            <br />
        </div>
    )


}

export default AddForm