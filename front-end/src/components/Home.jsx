import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from "./Header";
import Task from './Task';
import TasksNotFound from './TasksNotFound';
import addNewTask from '../api/addNewTask';
import editTask from '../api/editTask';
import sortTasks from '../api/sortTasks';


function Home() {

  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const getData = () => {
    axios.get('http://localhost:3001')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <div>
        {data.length === 0 ? (
          <TasksNotFound />
        ) : (
          data.map(
            ({ desc, task, _id: id, date, status, edit }) => (
              <Task
                key={id}
                {...{
                  desc,
                  task,
                  id,
                  getData,
                  editTask,
                  status,
                  edit,
                  date,
                }}
              />
            )
          )
        )}
      </div>
      <button onClick={ () => addNewTask(getData) } >Add New Task</button>
      <div className="task-buttons-order">
        <button
          type="button"
          onClick={() => sortTasks(setData, data, setRefresh, refresh, 'task')}
        >
          Ordenar por Nome
        </button>
        <button
          type="button"
          onClick={() => sortTasks(setData, data, setRefresh, refresh, 'date')}
        >
          Ordenar por Data
        </button>
        <button
          type="button"
          onClick={() => sortTasks(setData, data, setRefresh, refresh, 'status')}
        >
          Ordenar por status
        </button>
      </div>
    </div>
  );
}

export default Home;
