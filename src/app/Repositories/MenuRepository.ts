import { BaseRepositoryInterface } from './BaseRepository.interface';
import { BaseRepository } from './BaseRepository';
import { Role, User } from '../Models';
import { FindOptions, Includeable } from 'sequelize';
import { Menu } from '../Models/Menu';

interface MenuRepositoryInterface extends BaseRepositoryInterface {
    findByNames(names: string[], relations?: Includeable[]): Promise<any[] | null>;
}
/* eslint-disable class-methods-use-this */


class MenuRepository extends BaseRepository<Menu> implements MenuRepositoryInterface {
    constructor() {
        super(Menu);
    }

    public async menuExists(name: string): Promise<boolean> {
        const data = await Menu.findOne({
            where: {
                name,
            },
        });

        return data !== null;
    }
    

    public async findByNames(names: string[], relations?: Includeable[],): Promise<Menu[] | null> {
        const options : FindOptions = {};
        options.where = {
            name : names
        }
        if (relations) {
            options.include = relations;
        }
        return await Menu.findAll(options);
    }
}
export { MenuRepository };