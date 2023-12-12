import { RoleMiddleware } from "../middlewares/RoleMiddleware";
import { RoleController } from "../app/Controllers/RoleController";
import { Route } from "../lib/Facades";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";

export default [
    Route.get('/roles', [RoleController, 'all'], [AuthMiddleware, RoleMiddleware]),
    Route.post('/roles', [RoleController, 'create'], [AuthMiddleware]),
    Route.post('/roles/assign/permissions', [RoleController, 'assignPermissions'], [AuthMiddleware]),
    Route.get('/roles/datatables', [RoleController, 'datatables'], [AuthMiddleware]),
    Route.get('/roles/:id', [RoleController, 'findOne'], [AuthMiddleware]),
    Route.put('/roles/:id', [RoleController, 'update'], [AuthMiddleware]),
    Route.delete('/roles/:id', [RoleController, 'delete'], [AuthMiddleware]),
]