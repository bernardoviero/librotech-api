import { Router } from 'express';
import { userController } from './useCases/Usuario/Create';

const router: Router = Router();

router.post('/api/users', (request, response) => {
    return userController.handle(request, response);
});

export const indexRoute: Router = router;