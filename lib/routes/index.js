import express from 'express';
import usuarios from './usuarios';
import tutores from './tutores';

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('api/tutores', tutores);

export default router;
