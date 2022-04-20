import express from 'express';

import { massiveEmail } from '../controllers/sendEmail';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/', withErrorHandling(massiveEmail));

export default router;
