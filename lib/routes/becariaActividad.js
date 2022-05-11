import express from 'express';

import {
  addBecariaActividad,
  getBecariasEnActividad,
  getActividadesDeBecarias,
  addBecariasAActividad,
  updateBecariaActividad,
  deleteDeterminadasBecariasDeUnaActividad,
  deleteRelacionYActividad,
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
router.put('/:id', withErrorHandling(updateBecariaActividad));
router.delete('/', withErrorHandling(deleteDeterminadasBecariasDeUnaActividad));
router.delete('/:id', withErrorHandling(deleteRelacionYActividad));

export default router;
