import express from "express";
import TaskController from "../controllers/taskController";

const router = express.Router();

router.post("/create", TaskController.createTask);
router.get("/getall", TaskController.getTasks);
router.get("/get/:id", TaskController.getTask);
router.put("/update/:id", TaskController.updateTask);
router.delete("/delete/:id", TaskController.deleteTask);

export default router;