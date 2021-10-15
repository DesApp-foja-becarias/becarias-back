import express from 'express';
import usuarios from './usuarios';
import actividades from './actividades';

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/actividades', actividades);

export default router;
