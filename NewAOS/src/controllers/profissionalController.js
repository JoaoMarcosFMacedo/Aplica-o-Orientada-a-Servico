import { Profissional } from '../models/index.js';

const profissionalController = {
  async create(req, res) {
    try {
      const profissional = await Profissional.create(req.body);
      res.status(201).json(profissional);
    } catch (error) { res.status(400).json({ error: error.message }); }
  },
  async getAll(req, res) {
    try {
      const profissionais = await Profissional.findAll();
      res.status(200).json(profissionais);
    } catch (error) { res.status(500).json({ error: error.message }); }
  },
  async update(req, res) {
    try {
      const profissional = await Profissional.findByPk(req.params.id);
      if (!profissional) return res.status(404).json({ error: 'Registro não encontrado' });
      await profissional.update(req.body);
      res.status(200).json(profissional);
    } catch (error) { res.status(400).json({ error: error.message }); }
  },
  async delete(req, res) {
    try {
      const profissional = await Profissional.findByPk(req.params.id);
      if (!profissional) return res.status(404).json({ error: 'Registro não encontrado' });
      await profissional.destroy();
      res.status(204).send();
    } catch (error) { res.status(500).json({ error: error.message }); }
  }
};
export default profissionalController;