import { BaseRepositoryInterface } from './BaseRepository.interface';
import { BaseRepository } from './BaseRepository';
import { Permission, Role, User } from '../Models';
import { FindOptions, Includeable } from 'sequelize';
import { Menu } from '../Models/Menu';

interface PermissionRepositoryInterface extends BaseRepositoryInterface {
    findByNames(names: string[], relations?: Includeable[]): Promise<any[] | null>;
}
/* eslint-disable class-methods-use-this */


class PermissionRepository extends BaseRepository<Permission> implements PermissionRepositoryInterface {
    constructor() {
        super(Permission);
    }

    public async permissionExists(name: string): Promise<boolean> {
        const data = await Permission.findOne({
            where: {
                name,
            },
        });

        return data !== null;
    }
    

    public async findByNames(names: string[], relations?: Includeable[],): Promise<Permission[] | null> {
        const options : FindOptions = {};
        options.where = {
            name : names
        }
        if (relations) {
            options.include = relations;
        }
        return await Permission.findAll(options);
    }
}
export { PermissionRepository };