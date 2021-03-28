const NoteCardService = require("../service/NoteCardService");

class NoteCardController {
    salvar(req, res) {   
      return NoteCardService.salvar(req,res);
    }
  
    listarTodos(req, res) {
        return NoteCardService.listarTodos(req,res);
    }
  
    obterPorId(req, res) {
        return NoteCardService.obterPorId(req,res);
    }
  
    deletarPorId(req, res) {
        return NoteCardService.deletarPorId(req,res);
    }
  
    alterar(req, res) {
        return NoteCardService.alterar(req,res);
    }
  }

module.exports = new NoteCardController();
