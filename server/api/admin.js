import express from 'express';
import {showvolunteer,updatedaily,addvolunteer,trackvolunteer} from '../controllers/admin'
const adminRoute = express.Router();

adminRoute.get('/show/:id',showvolunteer);
adminRoute.patch('/update',updatedaily);
adminRoute.post('/add',addvolunteer);
adminRoute.get('/track/:id',trackvolunteer);
adminRoute.post('/create',createbeneficiary);

export default adminRoute;