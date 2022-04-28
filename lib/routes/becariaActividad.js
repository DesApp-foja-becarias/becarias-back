import express from 'express';

import {
  addBecariaActividad,
  getBecariasEnActividad,
  getActividadesDeBecarias,
  addBecariasAActividad,
} from '../controllers/becariaActividad_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.post('/', withErrorHandling(addBecariaActividad));
router.post('/agregarBecarias', withErrorHandling(addBecariasAActividad));
router.get(
  '/BecariaEnActividad/:id',
  withErrorHandling(getBecariasEnActividad)
);
router.get(
  '/ActividadDeBecarias/:id',
  withErrorHandling(getActividadesDeBecarias)
);

export default router;
