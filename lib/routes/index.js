import express from 'express';
import becarias from './becarias';
import usuarios from './usuarios';
import actividades from './actividades';
import materias from './materias';
import documentos from './documentos';
import estados from './estados';
import carreras from './carreras';
import cuentas from './cuentas';
import tutores from './tutores';
import becariaMateria from './becariaMateria';

const router = express.Router();
router.use('/api/usuarios', usuarios);
router.use('/api/actividades', actividades);
router.use('/api/materias', materias);
router.use('/api/documentos', documentos);
router.use('/api/estados', estados);
router.use('/api/carreras', carreras);
router.use('/api/cuentas', cuentas);
router.use('/api/tutores', tutores);
router.use('/api/becarias', becarias);
router.use('/api/becariaMateria', becariaMateria);

export default router;
