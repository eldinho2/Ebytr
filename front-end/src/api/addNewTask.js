import axios from "axios";

const addNewTask = async (getData) => {
  const taskDefault = { task: 'Task', desc: 'Descrição', status: false, edit: false };
  await axios.post(`http://localhost:3001`, taskDefault )

  setTimeout(() => {
    getData()
  }, 1);
}

export default addNewTask;