import express from 'express';

import {
  addTutorBecaria,
  getTutorBecaria,
  getBecariaTutor,
} from '../controllers/becariaTutor_controller';

import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/agregarTutor/', withErrorHandling(addTutorBecaria));
router.get('/becariaTutor/:id', withErrorHandling(getBecariaTutor));
router.get('/tutorBecaria/:id', withErrorHandling(getTutorBecaria));

export default router;
