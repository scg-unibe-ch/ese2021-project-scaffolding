import express, { Router, Request, Response } from 'express';
import {checkAdmin} from '../middlewares/checkAdmin';

const adminController: Router = express.Router();

// This is a middleware function that validates the token in the authorization-header for any incoming request
adminController.use(checkAdmin);

adminController.get('/', (req: Request, res: Response) => {
    // for demonstration purposes the content of the token and a message is returned
    res.send({message: `Hello boss, that here only admins see. ${req.body.tokenPayload.userName}` , decodedToken: req.body.tokenPayload });
});

export const AdminController: Router = adminController;
