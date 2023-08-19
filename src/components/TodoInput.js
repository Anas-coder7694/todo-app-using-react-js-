import React, { useState } from 'react'

function TodoInput(props) {
   const [inputText,SetInput]=useState("")  
  return (

    <div className='input-container'>
      
      <input type='text'className='input-box-todo' placeholder='Enter your Task'
      value={inputText}
      onChange={e=>{SetInput(e.target.value)}}
      />
      <button className='add-btn'
      onClick={()=>{props.addList(inputText)
      SetInput("")
      }}>+</button>
      

      
    </div>
    
  )
}

export default TodoInput
