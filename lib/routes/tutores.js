import express from 'express';

import {
  index,
  show,
  add,
  updateTutor,
  deleteTutor,
} from '../controllers/tutor_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(show));
router.post('/', withErrorHandling(add));
router.put('/:id', withErrorHandling(updateTutor));
router.delete('/:id', withErrorHandling(deleteTutor));

export default router;
