import { RoleMiddleware } from "../middlewares/RoleMiddleware";
import { Route } from "../lib/Facades";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { MenuController } from "../app/Controllers/MenuController";

export default [
    Route.get('/menus', [MenuController, 'all'], [AuthMiddleware, RoleMiddleware]),
    Route.post('/menus', [MenuController, 'create'], [AuthMiddleware]),
    Route.get('/menus/datatables', [MenuController, 'datatables'], [AuthMiddleware]),
    Route.get('/menus/:id', [MenuController, 'findOne'], [AuthMiddleware]),
    Route.put('/menus/:id', [MenuController, 'update'], [AuthMiddleware]),
    Route.delete('/menus/:id', [MenuController, 'delete'], [AuthMiddleware]),
]