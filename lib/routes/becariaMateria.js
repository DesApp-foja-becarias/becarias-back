import express from 'express';

import { addBecariaMateria } from '../controllers/becariaMateria_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/', withErrorHandling(addBecariaMateria));

export default router;
