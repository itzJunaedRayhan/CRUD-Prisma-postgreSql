import { Request, Response } from "express";
import { PostServices } from "./post.services";


//  create a new post:
const createPost = async (req: Request, res: Response) => {
    try {
        const result = await PostServices.createPost(req.body);
        res.send({
            success: true,
            message: "Post created successfully",
            data: result
        })
    } catch (err) {
        res.send(err);
    }
}


//  get all posts:
const getAllPosts = async (req: Request, res: Response) => {
    const options = req.query;
    try {
        const result = await PostServices.getAllPosts(options);
        res.send({
            success: true,
            message: "Posts retrieved successfully",
            total: result.total,
            data: result.data
        })
    } catch (err) {
        res.send(err);
    }
    
}

//  Update a post:
const updatePost = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const data = req.body;
    try {
        const result = await PostServices.updatePost(id, data);
        res.send({
            success: true,
            message: "Post updated successfully",
            data: result
        })
    } catch (err) {
        res.send(err);
    }
}

//  Delete a Post
const deletePost = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const result = await PostServices.deletePost(id);
        res.send({
            success: true,
            message: "Post deleted successfully",
            data: result
        })
    } catch (err) {
        res.send(err);
    }
}

//  Learn Aggregate and Grouping:
const learnAggregateAndGrouping = async (req: Request, res: Response) => {
    try {
        const result = await PostServices.learnAggregateAndGrouping();
        res.send({
            success: true,
            message: "Results generated successfully",
            data: result
        })
    } catch (err) {
        res.send(err);
    }
}


/**
 * limit = 5
 * page = 1
 * total = 10
 * take = limit
 * skip = limit * page - limit
 *         = 5 * 1 - 5 = 0
 * 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
 */

export const PostController = {
    createPost,
    getAllPosts,
    updatePost,
    deletePost,
    learnAggregateAndGrouping,
}
    