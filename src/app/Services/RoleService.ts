
import { Role } from '../Models';
import { ResourceNotFoundError } from '../Errors';
import { Order } from 'sequelize';
import { parseWhere } from '../Utils/helpers';
import { RoleRepository } from '../Repositories/RoleRepository';
import { AlreadyInUseError } from '../Errors/AlreadyInUseError';

class RoleService {
    constructor( 
        private roleRepository : RoleRepository
    ) { }

    public async all(): Promise<Role[]> {
        const datas = await this.roleRepository.all();
        return datas
    }

    public async findOne(id : number): Promise<Role> {
        const data = await this.roleRepository.findById(id, [], []);
        return data
    }

    public async create(name : string): Promise<Role | Error> {
        if (await this.roleRepository.roleExists(name)) {
            throw new AlreadyInUseError("role");
        }
        const data = await this.roleRepository.create({
            name,
        });
        return data;
    }

    public async update(id : number, name : string): Promise<Role | Error> {
        const exist = this.roleRepository.findById(id);
        if (!exist) {
            throw new ResourceNotFoundError();
        }
        if (await this.roleRepository.roleExists(name)) {
            throw new AlreadyInUseError("role");
        }


        const data = await this.roleRepository.update(id, {
            name,
        });

        return data;

    }

    public async delete(id : number): Promise<Boolean | Error> {
        const user = await this.roleRepository.delete(id);
        return user;
    }

    public async datatables(limit? : number, offset? : number, order? : Order, filter? : {}): Promise<Role[]> {

        const filters = parseWhere(filter);
        const users = await this.roleRepository.datatables([], filters, order, [], limit, offset);
        return users
    }
}

export { RoleService };