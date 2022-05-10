import express from 'express';

import {
  index,
  show,
  addBecaria,
  updateBecaria,
  deleteBecaria,
} from '../controllers/becaria_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(show));
router.post('/', withErrorHandling(addBecaria));
router.put('/:id', withErrorHandling(updateBecaria));
router.delete('/:id', withErrorHandling(deleteBecaria));

export default router;
