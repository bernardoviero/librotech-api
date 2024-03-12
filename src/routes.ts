import { Router } from 'express';
import { createUserController } from './useCases/Usuario/Create';
import { disableUserController } from './useCases/Usuario/Disable';
import { searchUserController } from './useCases/Usuario/Search';
import { updateUserController } from './useCases/Usuario/Update';
import { createAuthorController } from './useCases/Author/Create';
import { loginController } from './useCases/Auth/Login';

const router: Router = Router();

// usuarios
router.post('/api/user', (request, response) => {
    return createUserController.handle(request, response);
});
router.put('/api/disable/user', (request, response) => {
    return disableUserController.handle(request, response);
});
router.get('/api/user/:id', (request, response) => {
    return searchUserController.handle(request, response);
});
router.put('/api/user', (request, response) => {
    return updateUserController.handle(request, response);
});

// login
router.post('/api/login', (request, response) => {
    return loginController.handle(request, response);
});

// autores
router.post('/api/author', (request, response) => {
    return createAuthorController.handle(request, response);
});

export const indexRoute: Router = router;