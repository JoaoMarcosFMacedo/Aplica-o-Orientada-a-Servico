import { Router } from 'express';
import projetosController from '../controllers/projetosController.js';

const router = Router();
router.post('/', projetosController.create);
router.get('/', projetosController.getAll);
router.put('/:id', projetosController.update);
router.delete('/:id', projetosController.delete);

export default router;