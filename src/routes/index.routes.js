import { Router } from "express";
import {deleteTask, editTask, rendertaskEdit, renderTasks, taskDone} from "../controllers/tasks.controller"
import { createTasks } from "../controllers/tasks.controller";
const router = Router();

router.get("/", renderTasks );

router.post("/tasks/add", createTasks );

router.get("/tasks/:id/edit", rendertaskEdit);

router.post("/tasks/:id/edit",editTask);

router.get("/delete/:id",deleteTask)

router.get("/toggleDone/:id", taskDone)

export default router;
