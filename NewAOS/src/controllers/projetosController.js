import { Projetos } from '../models/index.js';

const projetosController = {
  async create(req, res) {
    try {
      const projeto = await Projetos.create(req.body);
      res.status(201).json(projeto);
    } catch (error) { res.status(400).json({ error: error.message }); }
  },
  async getAll(req, res) {
    try {
      const projetos = await Projetos.findAll();
      res.status(200).json(projetos);
    } catch (error) { res.status(500).json({ error: error.message }); }
  },
  async update(req, res) {
    try {
      const projeto = await Projetos.findByPk(req.params.id);
      if (!projeto) return res.status(404).json({ error: 'Registro não encontrado' });
      await projeto.update(req.body);
      res.status(200).json(projeto);
    } catch (error) { res.status(400).json({ error: error.message }); }
  },
  async delete(req, res) {
    try {
      const projeto = await Projetos.findByPk(req.params.id);
      if (!projeto) return res.status(404).json({ error: 'Registro não encontrado' });
      await projeto.destroy();
      res.status(204).send();
    } catch (error) { res.status(500).json({ error: error.message }); }
  }
};
export default projetosController;