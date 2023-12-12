import { RoleMiddleware } from "../middlewares/RoleMiddleware";
import { Route } from "../lib/Facades";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { PermissionController } from "../app/Controllers/PermissionController";

export default [
    Route.get('/permissions', [PermissionController, 'all'], [AuthMiddleware, RoleMiddleware]),
    Route.post('/permissions', [PermissionController, 'create'], [AuthMiddleware]),
    Route.get('/permissions/datatables', [PermissionController, 'datatables'], [AuthMiddleware]),
    Route.get('/permissions/:id', [PermissionController, 'findOne'], [AuthMiddleware]),
    Route.put('/permissions/:id', [PermissionController, 'update'], [AuthMiddleware]),
    Route.delete('/permissions/:id', [PermissionController, 'delete'], [AuthMiddleware]),
]