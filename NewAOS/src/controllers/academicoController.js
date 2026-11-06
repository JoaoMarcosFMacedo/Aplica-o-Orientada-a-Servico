import { Academico } from '../models/index.js';

const academicoController = {
  async create(req, res) {
    try {
      const academico = await Academico.create(req.body);
      res.status(201).json(academico);
    } catch (error) { res.status(400).json({ error: error.message }); }
  },
  async getAll(req, res) {
    try {
      const academicos = await Academico.findAll();
      res.status(200).json(academicos);
    } catch (error) { res.status(500).json({ error: error.message }); }
  },
  async update(req, res) {
    try {
      const academico = await Academico.findByPk(req.params.id);
      if (!academico) return res.status(404).json({ error: 'Registro não encontrado' });
      await academico.update(req.body);
      res.status(200).json(academico);
    } catch (error) { res.status(400).json({ error: error.message }); }
  },
  async delete(req, res) {
    try {
      const academico = await Academico.findByPk(req.params.id);
      if (!academico) return res.status(404).json({ error: 'Registro não encontrado' });
      await academico.destroy();
      res.status(204).send();
    } catch (error) { res.status(500).json({ error: error.message }); }
  }
};
export default academicoController;