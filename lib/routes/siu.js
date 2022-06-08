import express from 'express';

import { getCarrerasDesdeElSiu } from '../controllers/siu_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/carreras', withErrorHandling(getCarrerasDesdeElSiu));

export default router;
