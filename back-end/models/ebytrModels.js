const { ObjectId } = require("mongodb");
const connection = require("./conenction");

const getAll = async () => {
  return connection()
    .then((db) => db.collection("tasks").find().toArray())
    .then((tasks) => {
      return tasks;
    });
};

const addNewTask = async (name, desc, date, status) => {
    connection()
    .then((db) => db.collection("tasks").insertOne({ name, desc, date, status: false }))
    .then((result) => ({
      _id: result.insertedId,
      name,
      desc,
      date,
      status: false,
    }));
};

const editTask = async (id, name, desc) => {
  return connection()
    .then((db) =>
      db
        .collection("tasks")
        .findOneAndUpdate({ _id: ObjectId(id) }, { $set: { name, desc } })
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
