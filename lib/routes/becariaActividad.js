import express from 'express';

import { addBecariaActividad } from '../controllers/becariaActividad_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/', withErrorHandling(addBecariaActividad));

export default router;
