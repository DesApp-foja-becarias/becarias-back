import express from 'express';

import { addTutorMateria } from '../controllers/tutorMateria_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/', withErrorHandling(addTutorMateria));

export default router;
