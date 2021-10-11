import express from 'express';
import usuarios from './usuarios';
import cuentas from './cuentas';

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/cuentas', cuentas);

export default router;
