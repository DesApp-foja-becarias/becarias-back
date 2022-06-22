import express from 'express';

import {
  addTutorCarrera,
  updateTutorCarreras,
} from '../controllers/tutorCarrera_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/', withErrorHandling(addTutorCarrera));
router.put('/:id/carreras', withErrorHandling(updateTutorCarreras));

export default router;
