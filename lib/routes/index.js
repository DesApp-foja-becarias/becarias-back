import express from 'express';
import usuarios from './usuarios';
import actividades from './actividades';
import materias from './materias';
import documentos from './documentos';
import estados from './estados';
import carreras from './carreras';
import cuentas from './cuentas';
import tutores from './tutores';

const router = express.Router();
router.use('/api/usuarios', usuarios);
router.use('/api/actividades', actividades);
router.use('/api/materias', materias);
router.use('/api/documentos', documentos);
router.use('/api/estados', estados);
router.use('/api/carreras', carreras);
router.use('/api/cuentas', cuentas);
router.use('/api/tutores', tutores);

export default router;
