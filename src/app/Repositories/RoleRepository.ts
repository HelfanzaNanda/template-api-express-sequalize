import { BaseRepositoryInterface } from './BaseRepository.interface';
import { BaseRepository } from './BaseRepository';
import { Role, User } from '../Models';
import { FindOptions, Includeable } from 'sequelize';

interface RoleRepositoryInterface extends BaseRepositoryInterface {
    findByNames(names: string[], relations?: Includeable[]): Promise<any[] | null>;
}
/* eslint-disable class-methods-use-this */


class RoleRepository extends BaseRepository<Role> implements RoleRepositoryInterface {
    constructor() {
        super(Role);
    }

    public async roleExists(name: string): Promise<boolean> {
        const user = await Role.findOne({
            where: {
                name,
            },
        });

        return user !== null;
    }
    

    public async findByNames(names: string[], relations?: Includeable[],): Promise<Role[] | null> {
        const options : FindOptions = {};
        options.where = {
            name : names
        }
        if (relations) {
            options.include = relations;
        }
        return await Role.findAll(options);
    }
}
export { RoleRepository };