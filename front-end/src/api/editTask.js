import axios from "axios";

const editTask = async (id , getData, status, task, desc) => {
  const response = {
    task: task,
    desc: desc,
    status: status,
    edit: false
  }
  await axios.put(`http://localhost:3001/${id}`, response)

  setTimeout(() => {
    getData()
  }, 1);
}

export default editTask;
