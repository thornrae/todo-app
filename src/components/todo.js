import React, {useState, useEffect} from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';

import useAxios from 'axios-hooks';
import axios from 'axios';

function ToDo(props) {
  const [list, setList] = useState([]);

  const [{data, loading, error}, refetch] = useAxios({url: "https://todo-app-server-tt.herokuapp.com/tasks", method: "GET"});

  console.log('tododataaaa', list)

console.log('starting list--------------', list)

  const addItem = async item => {
    item.complete = false;
    let url = "https://todo-app-server-tt.herokuapp.com/tasks";
    await axios.post(url, item);
    let newList = list.map(listItem => listItem._id === item._id ? item : listItem)
    setList(newList);
    refetch()
  };

  const toggleComplete = async id => {
    let item = list.filter(i=> i._id === id[0] || {});
    
    if(item._id) {
      item.complete = !item.complete;
      let url = `https://todo-app-server-tt.herokuapp.com/tasks/${id}`;
      await axios.put(url, item);

      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);

      setList(newList);
      refetch();
    }
  };

  const deleteItem = async id => {
    let item = list.filter(i => i._id === id[0]) || {};

    if(item._id) {
      let url = `https://todo-app-server-tt.herokuapp.com/tasks/${id}`;
      let deletedItem = await axios.delete(url, item);
      console.log(deletedItem);
      let updatedList = list.map(listItem => listItem.id === item._id ? item : listItem);
      setList(updatedList);
      refetch();
    }
  }

  useEffect( () => {
    if(!loading){
      setList(data.results);
    }
  }, [loading, data])

  return (
    <>
      <TodoForm 
        todoHandleSubmit={addItem}  
      />
      <TodoList 
        list={list}
        handleComplete={toggleComplete}
        handleDelete={deleteItem}
      />
    </>
  )

}

export default ToDo