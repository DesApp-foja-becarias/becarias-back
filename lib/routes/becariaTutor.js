import express from 'express';

import {
  addTutorBecaria,
  getTutorBecaria,
  getBecariaTutor,
  updateTutorBecaria,
  deleteTutorBecaria,
} from '../controllers/becariaTutor_controller';

import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/', withErrorHandling(addTutorBecaria));
router.get('/becariaTutor/:id', withErrorHandling(getBecariaTutor));
router.get('/verBecarias/:id', withErrorHandling(getTutorBecaria));
router.put('/tutorBecaria/:id', withErrorHandling(updateTutorBecaria));
router.delete('/tutorBecaria/:id', withErrorHandling(deleteTutorBecaria));
export default router;
