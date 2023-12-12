import { Middleware } from "../lib/Middleware";
import { ForbiddenError, UnauthorizedError } from "../app/Errors";
import { TokenFacade } from "../app/Facades";
import { Menu, Permission, Role } from "../app/Models";
import { getRoleId, getUserId } from "../app/Utils/helpers";


class RoleMiddleware extends Middleware {

    // constructor(...roles : string[]) {
    //     console.log('ROLES : ', roles);
    //     super();
    // }

    protected static override async handle(): Promise<any> {

        // const roleId = getRoleId(this.request);

        // const role = await Role.findOne({
        //     where : { id : roleId },
        //     include : [
        //         {
        //             model : Permission,
        //             through: {attributes: []},
        //             attributes: ['id', 'name']
        //         }
        //     ]
        // });

        // //nnti disini ambil menus. lalu cek ada nggk permissuon ini di menu
        // console.log('ROLE : ', role?.permissions);


        // const path = this.request.path;
        // const menu = await Menu.findOne({
        //     where : { path }
        // });

        

        // // {
        // //     model: Menu,
        // //     where: {
        // //       menu_id : menu?.id
        // //     },
        // //     required: false
        // //   }
        
        // const permissions = await Permission.findAll({
        //     // where : {
        //     //     '$menus_permissions.menu_id$' : menu?.id
        //     // },
        //     // include: {
        //     //     model: Menu,
        //     //   }
        //     include: [
        //         {
        //             model : Menu,
        //             through: {
        //                 // attributes: [],
        //                 where : {
        //                     menu_id : menu?.id
        //                 }
        //             },
        //             attributes: ['id', 'name']
        //         }
        //     ]
        // })

        // console.log('permisssions : ', permissions);

        // if (!permissions.length) {
        //     throw new ForbiddenError();
        // }
        

        // const permissions = role?.permissions;

        
        

        
        
        
        
        

        // if (this.request.headers.authorization === undefined || this.request.headers.authorization === null) {
        //     throw new UnauthorizedError();
        // }

        // let token = this.request.headers.authorization.toString().split(" ")[1];

        // if (token === ''){
        //     throw new UnauthorizedError();
        // }
        
        // const { result, message } = TokenFacade.verify(token);
        // if (!result){
        //     throw new UnauthorizedError(message!!);
        // }
        
        return this.next();
    }
}

export { RoleMiddleware };