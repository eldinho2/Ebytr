import axios from "axios";

const deleteTask = async (id, getData) => {
  await axios.delete(`http://localhost:3001/${id}`)

  setTimeout(() => {
    getData()
  }, 1);
}

export default deleteTask;
