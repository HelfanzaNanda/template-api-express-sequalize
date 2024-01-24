import { Route } from "../lib/Facades";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";
import { InvitationController } from "../app/Controllers/InvitationController";
import { RoleMiddleware } from "middlewares/RoleMiddleware";

export default [
    Route.get('/invitations', [InvitationController, 'all'], [AuthMiddleware]),
    Route.post('/invitations', [InvitationController, 'create'], [AuthMiddleware]),
    Route.get('/invitations/datatables', [InvitationController, 'datatables'], [AuthMiddleware]),
    Route.get('/invitations/:id', [InvitationController, 'findOne'], [AuthMiddleware]),
    Route.put('/invitations/:id', [InvitationController, 'update'], [AuthMiddleware]),
    Route.delete('/invitations/:id', [InvitationController, 'delete'], [AuthMiddleware]),
]