import { ResourceNotFoundError } from '../Errors';
import { Order } from 'sequelize';
import { parseWhere } from '../Utils/helpers';
import { AlreadyInUseError } from '../Errors/AlreadyInUseError';
import { MenuRepository } from '../Repositories/MenuRepository';
import { Menu, MenuInputModel } from '../Models/Menu';

class MenuService {
    constructor( private menuRepository : MenuRepository ) { }

    public async all(): Promise<Menu[]> {
        const datas = await this.menuRepository.all();
        return datas
    }

    public async findOne(id : number): Promise<Menu> {
        const data = await this.menuRepository.findById(id, [], []);
        return data
    }

    public async create(params : MenuInputModel): Promise<Menu | Error> {
        if (await this.menuRepository.menuExists(params.name)) {
            throw new AlreadyInUseError("menu");
        }
        const data = await this.menuRepository.create(params);
        return data;
    }

    public async update(id : number, name : string): Promise<Menu | Error> {
        const exist = this.menuRepository.findById(id);
        if (!exist) {
            throw new ResourceNotFoundError();
        }
        if (await this.menuRepository.menuExists(name)) {
            throw new AlreadyInUseError("Menu");
        }


        const data = await this.menuRepository.update(id, {
            name,
        });

        return data;

    }

    public async delete(id : number): Promise<Boolean | Error> {
        const user = await this.menuRepository.delete(id);
        return user;
    }

    public async datatables(limit? : number, offset? : number, order? : Order, filter? : {}): Promise<Menu[]> {

        const filters = parseWhere(filter);
        const users = await this.menuRepository.datatables([], filters, order, [], limit, offset);
        return users
    }
}

export { MenuService };