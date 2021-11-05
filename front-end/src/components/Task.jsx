import React from "react";
import { useState } from "react";

import deleteTask from "../api/deleteTask";
import editTask from "../api/editTask";

function Tasks({ desc, task, id, getData, date, status, edit }) {
  const [tempTextTask, setTempTextTask] = useState("");
  const [tempTextDesc, setTempTextDesc] = useState("");

  const [editModeTask, setEditModeTask] = useState(false);
  const [editModeDesc, setEditModeDesc] = useState(false);

  const formatedDate = new Date(date).toLocaleString();
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={status}
        onClick={() => editTask(id, getData, !status, task, desc)}
      />
      <h3>
        {editModeTask ? (
          <input
            type="text"
            value={tempTextTask}
            onChange={(e) => setTempTextTask(e.target.value)}
            onBlur={() => {
              editTask(id, getData, status, tempTextTask, desc);
              setEditModeTask(false);
            }}
          />
        ) : (
          <span
            onClick={() => setEditModeTask(true)}
            style={
              !status ? {} : { textDecoration: "line-through", color: "green" }
            }
          >
            {!task ? "Tarefa" : task}
          </span>
        )}
      </h3>
      <h4>
        {editModeDesc ? (
          <input
            type="text"
            value={tempTextDesc}
            onChange={(e) => setTempTextDesc(e.target.value)}
            onBlur={() => {
              editTask(id, getData, status, task, tempTextDesc);
              setEditModeDesc(false);
            }}
          />
        ) : (
          <span
            onClick={() => setEditModeDesc(true)}
            style={
              !status ? {} : { textDecoration: "line-through", color: "green" }
            }
          >
            {!desc ? "Descrição da Tarefa" : desc}
          </span>
        )}
      </h4>
      <span>Data de Criação {formatedDate}</span>
      <h4> {id} </h4>
      <button onClick={() => deleteTask(id, getData)}>Apagar</button>
    </div>
  );
}

export default Tasks;
