import express, { Application } from 'express';
import cors from 'cors';
import { UserRoutes } from './modules/users/user.route';
import { CategoryRoutes } from './modules/categories/category.route';
import { PostRoutes } from './modules/posts/post.route';

const app:Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1', UserRoutes);
app.use('/api/v1/category', CategoryRoutes);
app.use('/api/v1/post', PostRoutes);

export default app;