const ebytrModels = require('../models/ebytrModels');

const getAll = async () => ebytrModels.getAll();

const addNewTask = async (name, desc) => {
  const date = new Date();
  const response = await ebytrModels.addNewTask(name, desc, date);
  return response;
}

const editTask = async (id, name, desc) => ebytrModels.editTask(id, name , desc);

const deleteTask = async (id) => ebytrModels.deleteTask(id);

module.exports = {
  getAll,
  addNewTask,
  editTask,
  deleteTask
}
