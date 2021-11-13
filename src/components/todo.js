import React, {useState, useEffect} from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

// import useAxios from 'axios-hooks';
// import axios from 'axios';

function ToDo(props) {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  )

}

export default ToDo