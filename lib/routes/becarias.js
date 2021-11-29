import express from 'express';

import {
  index,
  show,
  add,
  addBecariaYCarrera,
  updateBecaria,
  deleteBecaria,
} from '../controllers/becaria_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(show));
router.post('/', withErrorHandling(add));
router.post('/creating', withErrorHandling(addBecariaYCarrera));
router.put('/:id', withErrorHandling(updateBecaria));
router.delete('/:id', withErrorHandling(deleteBecaria));

export default router;
