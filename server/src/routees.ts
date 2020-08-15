import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routees = express.Router();
const classesControllers = new ClassesController()
const connectionsController = new ConnectionsController();

routees.get('/classes', classesControllers.index);
routees.post('/classes', classesControllers.create);

routees.get('/connections', connectionsController.index);
routees.post('/connections', connectionsController.create);

export default routees;