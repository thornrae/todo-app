import React from 'react';

const TodoList = (props) => {
  console.log(props)
  return (
    <>
    {props.list.map(item => 
      <div key={item._id}>
        <p>{item.text}</p>
        <p onClick={ () => props.handleComplete(item._id)}>
          {item.complete.toString()}
        </p>
        <p>{item.assignee}</p>
        <span onClick={() => props.handleDelete(item._id)}>
          x
        </span>

      </div>
    )}
    </>
  )
}

export default TodoList;