import express from 'express';
import usuarios from './usuarios';
import estados from './estados';

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/estados', estados);

export default router;
