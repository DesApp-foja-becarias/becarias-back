import express from 'express';
import usuarios from './usuarios';
import carreras from './carreras';
import cuentas from './cuentas';
import tutores from './tutores';

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/carreras', carreras);
router.use('/api/cuentas', cuentas);
router.use('/api/tutores', tutores);

export default router;
