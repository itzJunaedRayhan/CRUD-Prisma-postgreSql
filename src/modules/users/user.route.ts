import express, { Request, Response } from 'express';
import { UserController } from './user.controller';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send("Hello Prisma");
});

router.post('/create-user', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.get('/users/:id', UserController.getSingleUser);
router.post('/create-profile', UserController.insertOrUpdateProfile);

export const UserRoutes = router;