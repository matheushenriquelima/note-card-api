const NoteCard = require("../model/NoteCard");

class NoteCardService {
  async salvar(req, res) {
    try {
      const notecard = await NoteCard.create(req.body);
      return res.json(notecard);
    } catch (error) {
      return res
        .status(400)
        .send({ error: "Nao foi possivel inserir o note card" });
    }
  }

  async listarTodos(req, res) {
    try {
      const notecards = await NoteCard.find({});
      return res.json(notecards);
    } catch (error) {
      return res
        .status(404)
        .send({ error: "Nao foi possivel encontrar os note cards" });
    }
  }

  async obterPorId(req, res) {
    try {
      const notecard = await NoteCard.findById(req.params.id);
      return res.json(notecard);
    } catch (error) {
      return res
        .status(404)
        .send({ error: "Nao foi possivel encontrar o note card" });
    }
  }

  async deletarPorId(req, res) {
    try {
      const notecard = await NoteCard.findByIdAndDelete(req.params.id);
      return res.status(200).json(`${notecard.titulo} deletado com sucesso!`);
    } catch (error) {
      return res
        .status(400)
        .send({ error: "Nao foi possivel deletar o note card" });
    }
  }

  async alterar(req, res) {
    try {
      const notecard = await NoteCard.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      return res.status(200).json(notecard);
    } catch (error) {
      return res
        .status(400)
        .send({ error: "Nao foi possivel alterar o note card" });
    }
  }
}

module.exports = new NoteCardService();
