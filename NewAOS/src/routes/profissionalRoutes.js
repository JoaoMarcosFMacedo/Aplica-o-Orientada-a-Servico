import { Router } from 'express';
import profissionalController from '../controllers/profissionalController.js';

const router = Router();
router.post('/', profissionalController.create);
router.get('/', profissionalController.getAll);
router.put('/:id', profissionalController.update);
router.delete('/:id', profissionalController.delete);

export default router;