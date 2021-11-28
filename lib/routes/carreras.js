import express from 'express';

import {
  index,
  show,
  add,
  updateCarrera,
  deleteCarrera,
} from '../controllers/carrera_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(show));
router.post('/', withErrorHandling(add));
router.put('/:id', withErrorHandling(updateCarrera));
router.delete('/:id', withErrorHandling(deleteCarrera));

export default router;
