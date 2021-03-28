const express = require("express");

const routes = express.Router();
const NoteCardController = require("./app/controller/NoteCardController");

routes.get("/note-card",NoteCardController.listarTodos);
routes.get("/note-card/:id",NoteCardController.obterPorId);
routes.post("/note-card", NoteCardController.salvar);
routes.put("/note-card/:id", NoteCardController.alterar);
routes.delete("/note-card/:id",NoteCardController.deletarPorId);

module.exports = routes;
