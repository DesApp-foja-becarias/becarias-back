import express from 'express';
import usuarios from './usuarios';
import documentos from './documentos';

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/documentos', documentos);

export default router;
