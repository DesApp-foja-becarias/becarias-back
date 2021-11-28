import express from 'express';

import { addTutorCarrera } from '../controllers/tutorCarrera_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/', withErrorHandling(addTutorCarrera));

export default router;
