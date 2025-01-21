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

  
const getTask = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const task = await prisma.task.findUnique({
        where: {
          id: Number(id),
        },
      });
      res.status(200).json(task);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  };

const updateTask = async (req: Request, res: Response) => {
    try {
      const { id, title, color, completed } = req.body;
      const updatedTask = await prisma.task.update({
        where: {
          id: Number(id),
        },
        data: {
          title,
          color,
          completed
        },
      });
      res.status(200).json(updatedTask);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  };

const deleteTask = async (req: Request, res: Response) => {
    try {
      const { id } = req.body;
      const deletedTask = await prisma.task.delete({
        where: {
          id: Number(id),
        },
      });
      res.status(200).json(deletedTask);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  };


  export default {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask,
  };