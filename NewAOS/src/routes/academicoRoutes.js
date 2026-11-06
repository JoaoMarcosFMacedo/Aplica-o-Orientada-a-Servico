import { Router } from 'express';
import academicoController from '../controllers/academicoController.js';

const router = Router();
router.post('/', academicoController.create);
router.get('/', academicoController.getAll);
router.put('/:id', academicoController.update);
router.delete('/:id', academicoController.delete);

export default router;