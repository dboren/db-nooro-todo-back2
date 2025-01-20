import { Request, Response } from "express";
import { prisma } from "../server";

const createTask = async (req: Request, res: Response) => {
    try {
      const { title, color } = req.body;
      const newTask = await prisma.task.create({
        data: {
          title,
          color,
        },
      });
      res.status(200).json(newTask);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  };

  const getTasks = async (req: Request, res: Response) => {
    try {
      const tasks = await prisma.task.findMany();
      res.status(200).json(tasks);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  };


  export default {
    createTask,
    getTasks,
    // getBlogPost,
    // updateBlogPost,
    // deleteBlogPost,
    // deleteAllBlogPosts,
    // likeBlogPost,
  };