import express from 'express';

import {
  index,
  show,
  add,
  updateCuenta,
  deleteCuenta,
} from '../controllers/cuenta_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(show));
router.post('/', withErrorHandling(add));
router.put('/:id', withErrorHandling(updateCuenta));
router.delete('/:id', withErrorHandling(deleteCuenta));

export default router;
