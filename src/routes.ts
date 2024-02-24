import { Router } from 'express';
import { UserController } from '../src/usuarios/creation/UserController';

const router: Router = Router();
const userController = new UserController();

router.get('/', (req, res) => {
    res.send('olá');
});

router.post('/api/users', (req, res) => {
    userController.createUser(req, res);
});

export const indexRoute: Router = router;