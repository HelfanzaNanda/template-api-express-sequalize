import { UserController } from "../app/Controllers";
import { Route } from "../lib/Facades";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";

export default [
    Route.get('/users', [UserController, 'all'], [AuthMiddleware]),
    Route.post('/users', [UserController, 'create'], [AuthMiddleware]),
    Route.get('/users/datatables', [UserController, 'datatables'], [AuthMiddleware]),
    Route.get('/users/:id', [UserController, 'findOne'], [AuthMiddleware]),
    Route.put('/users/:id', [UserController, 'update'], [AuthMiddleware]),
    Route.delete('/users/:id', [UserController, 'delete'], [AuthMiddleware]),
]