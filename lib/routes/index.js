import express from 'express';
import usuarios from './usuarios';
import materias from './materias';

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/materias', materias);

export default router;
