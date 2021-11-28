import express from 'express';

import {
  index,
  show,
  add,
  updateActividad,
  deleteActividad,
} from '../controllers/actividad_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(show));
router.post('/', withErrorHandling(add));
router.put('/:id', withErrorHandling(updateActividad));
router.delete('/:id', withErrorHandling(deleteActividad));

export default router;
