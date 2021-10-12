import express from 'express';
import becarias from './becarias';
import usuarios from './usuarios';

const router = express.Router();

router.use('/api/usuarios', usuarios);
router.use('/api/becarias', becarias);

export default router;
