import express from 'express';

import {
  index,
  show,
  add,
  updateMateria,
  deleteMateria,
} from '../controllers/materia_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(show));
router.post('/', withErrorHandling(add));
router.put('/:id', withErrorHandling(updateMateria));
router.delete('/:id', withErrorHandling(deleteMateria));

export default router;
