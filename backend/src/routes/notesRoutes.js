import express from "express";
import {getNotes, getNotebById, createNotes, updateNotes, deleteNotes} from "../controllers/notesController.js";
const router = express.Router();

router.get("/", getNotes);
router.get("/:id", getNotebById);
router.post("/", createNotes);

router.put("/:id", updateNotes);

router.delete("/:id", deleteNotes);
export default router;