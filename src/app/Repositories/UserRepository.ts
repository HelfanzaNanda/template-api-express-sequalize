import { BaseRepositoryInterface } from './BaseRepository.interface';
import { BaseRepository } from './BaseRepository';
import { User } from '../Models';
import { FindOptions, Includeable } from 'sequelize';

interface UserRepositoryInterface extends BaseRepositoryInterface {
    findByEmail(email: string, relations?: Includeable[]): Promise<any | null>;
    emailExists(email: string): Promise<boolean>;
}
/* eslint-disable class-methods-use-this */


class UserRepository extends BaseRepository<User> implements UserRepositoryInterface {
    constructor() {
        super(User);
    }

    
 
    public async findByEmail(email: string, relations?: Includeable[],): Promise<User | null> {
        const options : FindOptions = {};
        options.where = {
            email : email,
        }
        if (relations) {
            options.include = relations;
        }
        return await User.scope('withPassword').findOne(options);
    }

    public async emailExists(email: string): Promise<boolean> {
        const user = await User.findOne({
            where: {
                email,
            },
        });


        return user !== null;
    }

    public async phoneExists(phone: string): Promise<boolean> {
        const user = await User.findOne({
            where: {
                phone,
            },
        });

        return user !== null;
    }
}
export { UserRepository };