const express = require('express');
const router = express.Router();
const services = require('../services/ebytrServices')

router.get('/', async (req, res) => {
  const response = await services.getAll();
  res.status(200).json(response);
})

router.post('/', async (req, res) => {
  const { task, desc } = req.body;
  const response = await services.addNewTask(task, desc);
  res.status(201).json(response);
})

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { task, desc, status, edit } = req.body;
  const response = services.editTask(id, task, desc, status, edit);
  res.status(200).json(response);
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await services.deleteTask(id);
  res.status(200).json(response);
})

module.exports = router;
