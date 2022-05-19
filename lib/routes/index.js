import express from 'express';
import becarias from './becarias';
import actividades from './actividades';
import materias from './materias';
import documentos from './documentos';
import estados from './estados';
import carreras from '../../siu-api/callback/getCarreras';
import cuentas from './cuentas';
import tutores from './tutores';
import becariaActividad from './becariaActividad';
import sendEmail from './sendEmail';
import becariaTutor from './becariaTutor';

const router = express.Router();
router.use('/api/actividades', actividades);
router.use('/api/materias', materias);
router.use('/api/documentos', documentos);
router.use('/api/estados', estados);
router.use('/api/carreras', carreras);
router.use('/api/cuentas', cuentas);
router.use('/api/tutores', tutores);
router.use('/api/becarias', becarias);
router.use('/api/becariaActividad', becariaActividad);
router.use('/api/sendEmail', sendEmail);
router.use('/api/becariaTutor', becariaTutor);

export default router;
