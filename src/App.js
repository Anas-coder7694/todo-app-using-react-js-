
import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
function App() {
  const [listTodo,SetListTodo]=useState([]);
 
  let addList = (inputText)=>{          //AddList is an arrow function to add/append List
  SetListTodo([...listTodo,inputText]);
  }

  const deleteListItem =(key)=>{
    let newListTodo=[...listTodo];
    newListTodo.splice(key,1)
    SetListTodo([...newListTodo])
  }

  return (
    <div className="main-container">
    <div className='center-container'>
    <TodoInput addList={addList} />
    <h1 className='app-heading'>TASK TO DO</h1>
    <hr/>
    {listTodo.map((listItem,i)=>{
      return(<TodoList  key={i} item={listItem} index={i} deleteItem={deleteListItem}/>)
    })}
    
    </div>
    </div>
  );
}

export default App;
