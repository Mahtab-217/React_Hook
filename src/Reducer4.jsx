import React, { useReducer } from 'react'
import TodoCart from './TodoCart';
import AddTodo from './AddTodo';

const todoList = ["washing", "cleaning", "dancing"];
function Reducer4() {
    function myFunc(data, action ){
        return [...data, action.payload];

    }
 const [ todos, dispatch]=   useReducer(myFunc, todoList);
  return (
    <div className='w-full  max-e-6xl mx-auto'>
        <AddTodo todos={todos} dispatch={dispatch}/>
        <div className=' p-5 grid grid-cols-2 gap-4 h-'>
            {todos.map((x)=>{
                return(
                    <TodoCart x={x}/>
                )
            })}
        </div>
    </div>
  )
}

export default Reducer4