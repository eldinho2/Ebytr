const ebytrModels = require('../models/ebytrModels');

const getAll = async () => ebytrModels.getAll();

const addNewTask = async (task, desc, status, edit) => {
  const date = new Date();
  const response = await ebytrModels.addNewTask(task, desc, date, status, edit);
  return response;
}

const editTask = async (id, task, desc, status, edit) => ebytrModels.editTask(id, task , desc, status, edit);

const deleteTask = async (id) => ebytrModels.deleteTask(id);

module.exports = {
  getAll,
  addNewTask,
  editTask,
  deleteTask
}
