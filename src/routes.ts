import { Router } from 'express';
import { createUserController } from './useCases/Usuario/Create';
import { disableUserController } from './useCases/Usuario/Disable';
import { searchUserController } from './useCases/Usuario/Search';

const router: Router = Router();

router.post('/api/user', (request, response) => {
    return createUserController.handle(request, response);
});

router.put('/api/disable/user', (request, response) => {
    return disableUserController.handle(request, response);
});

router.get('/api/user/:id', (request, response) => {
    return searchUserController.handle(request, response);
});

export const indexRoute: Router = router;