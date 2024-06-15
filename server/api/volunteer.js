import express from 'express';
import { addbenificiary, addplace, editbenificiary, showbeneficiary } from '../controller/volunteer.js';
const volunteerRoute = express.Router();

volunteerRoute.post('/add',addbenificiary);
volunteerRoute.get('/show/:id',showbeneficiary);
volunteerRoute.patch('/edit/:id',editbenificiary);
volunteerRoute.post('/addplace/:id',addplace);

export default volunteerRoute;
