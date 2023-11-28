import { BaseRepositoryInterface } from './BaseRepository.interface';
import { BaseRepository } from './BaseRepository';
import { User } from 'app/Models';

interface UserRepositoryInterface extends BaseRepositoryInterface {
    findByEmail(email: string): Promise<any | null>;
    emailExists(email: string): Promise<boolean>;
}
/* eslint-disable class-methods-use-this */


class UserRepository extends BaseRepository<User> implements UserRepositoryInterface {
    constructor() {
        super(User);
    }

    public async findByEmail(email: string): Promise<User | null> {
        return User.findOne({
            where: {
                email,
            },
        });
    }

    public async emailExists(email: string): Promise<boolean> {
        const user = await User.findOne({
            where: {
                email,
            },
        });

        return user !== null;
    }
}
export { UserRepository };