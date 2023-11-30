import { Route } from '../lib/Facades';
import { AuthController, UserController } from '../app/Controllers';
import { AuthMiddleware } from '../middlewares/Global/AuthMiddleware';
import { RoleController } from '../app/Controllers/RoleController';

export default [
    Route.post('/auth/login', [AuthController, 'login']),
    Route.post('/auth/register', [AuthController, 'register']),
    
    Route.get('/users', [UserController, 'all'], [AuthMiddleware]),
    Route.post('/users', [UserController, 'create'], [AuthMiddleware]),
    Route.post('/users/datatables', [UserController, 'datatables'], [AuthMiddleware]),
    Route.get('/users/:id', [UserController, 'findOne'], [AuthMiddleware]),
    Route.put('/users/:id', [UserController, 'update'], [AuthMiddleware]),
    Route.delete('/users/:id', [UserController, 'delete'], [AuthMiddleware]),

    Route.get('/roles', [RoleController, 'all'], [AuthMiddleware]),
    Route.post('/roles', [RoleController, 'create'], [AuthMiddleware]),
    Route.post('/roles/datatables', [RoleController, 'datatables'], [AuthMiddleware]),
    Route.get('/roles/:id', [RoleController, 'findOne'], [AuthMiddleware]),
    Route.put('/roles/:id', [RoleController, 'update'], [AuthMiddleware]),
    Route.delete('/roles/:id', [RoleController, 'delete'], [AuthMiddleware]),
];