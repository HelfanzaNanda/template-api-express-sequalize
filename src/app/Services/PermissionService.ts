import { ResourceNotFoundError } from '../Errors';
import { Order } from 'sequelize';
import { parseWhere } from '../Utils/helpers';
import { AlreadyInUseError } from '../Errors/AlreadyInUseError';
import { Permission, PermissionInputModel, } from '../Models/Permission';
import { PermissionRepository } from '../Repositories/PermissionRepository';

class PermissionService {
    constructor( private permissionRepository : PermissionRepository ) { }

    public async all(): Promise<Permission[]> {
        const datas = await this.permissionRepository.all();
        return datas
    }

    public async findOne(id : number): Promise<Permission> {
        const data = await this.permissionRepository.findById(id, [], []);
        return data
    }

    public async create(params : PermissionInputModel): Promise<Permission | Error> {
        if (await this.permissionRepository.permissionExists(params.name)) {
            throw new AlreadyInUseError("Permission");
        }
        const data = await this.permissionRepository.create(params);
        return data;
    }

    public async update(id : number, name : string): Promise<Permission | Error> {
        const exist = this.permissionRepository.findById(id);
        if (!exist) {
            throw new ResourceNotFoundError();
        }
        if (await this.permissionRepository.permissionExists(name)) {
            throw new AlreadyInUseError("Permission");
        }


        const data = await this.permissionRepository.update(id, {
            name,
        });

        return data;

    }

    public async delete(id : number): Promise<Boolean | Error> {
        const user = await this.permissionRepository.delete(id);
        return user;
    }

    public async datatables(limit? : number, offset? : number, order? : Order, filter? : {}): Promise<Permission[]> {

        const filters = parseWhere(filter);
        const users = await this.permissionRepository.datatables([], filters, order, [], limit, offset);
        return users
    }
}

export { PermissionService };