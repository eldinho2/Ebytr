const { ObjectId } = require("mongodb");
const connection = require("./conenction");

const getAll = async () => {
  return connection()
    .then((db) => db.collection("tasks").find().toArray())
    .then((tasks) => {
      return tasks;
    });
};

const addNewTask = async (task, desc, date, status, edit) => {
    connection()
    .then((db) => db.collection("tasks").insertOne({ task, desc, date, status: false, edit: false }))
    .then((result) => ({
      _id: result.insertedId,
      task,
      desc,
      date,
      status,
      edit
    }));
};

const editTask = async (id, task, desc, status, edit) => {
  return connection()
    .then((db) =>
      db
        .collection("tasks")
        .findOneAndUpdate({ _id: ObjectId(id) }, { $set: { task, desc, status, edit } })
    )
};

const deleteTask = async (id) => {
  return connection()
    .then((db) => db.collection("tasks").deleteOne({ _id: ObjectId(id) }))
    .then((result) => {
      return result;
    });
};

module.exports = {
  getAll,
  addNewTask,
  editTask,
  deleteTask,
};
