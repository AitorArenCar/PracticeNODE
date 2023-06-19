const express = require('express');
const router = express.Router();

const controllerRoutesEmployee = require('../controllers/controllersEmployee');

//get all
router.get('/list', controllerRoutesEmployee.getALL);

//get with id
router.get('/:id', controllerRoutesEmployee.getWithID);

//create
router.post('/add', controllerRoutesEmployee.create);

//delete
router.delete('/:id', controllerRoutesEmployee.delete);

//update
router.put('/:id', controllerRoutesEmployee.update);


module.exports=router;