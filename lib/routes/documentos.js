import express from 'express';

import {
  index,
  show,
  add,
  updateDocumento,
  deleteDocumento,
} from '../controllers/documento_controller';
import { withErrorHandling } from './utils';

const router = express.Router();

router.get('/', withErrorHandling(index));
router.get('/:id', withErrorHandling(show));
router.post('/', withErrorHandling(add));
router.put('/:id', withErrorHandling(updateDocumento));
router.delete('/:id', withErrorHandling(deleteDocumento));

export default router;
