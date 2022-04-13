import express from 'express';

import { addBecariaCarrera } from '../controllers/becariaCarrera_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/', withErrorHandling(addBecariaCarrera));

export default router;
