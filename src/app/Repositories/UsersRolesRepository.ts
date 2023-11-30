import { BaseRepositoryInterface } from './BaseRepository.interface';
import { BaseRepository } from './BaseRepository';
import { User, UsersRoles } from '../Models';
import { BulkCreateOptions, CreateOptions, DestroyOptions, FindOptions, Includeable, Optional, Transaction,  } from 'sequelize';

interface UsersRolesRepositoryInterface extends BaseRepositoryInterface {
    // findByEmail(email: string, relations?: Includeable[]): Promise<any | null>;
    // emailExists(email: string): Promise<boolean>;

    bulkCreate(records: Optional<any, string>[], transaction? : Transaction) : Promise<any | null>
    bulkDeleteByUserId(id: number, transaction? : Transaction) : Promise<any | null>
}
/* eslint-disable class-methods-use-this */


class UsersRolesRepository extends BaseRepository<User> implements UsersRolesRepositoryInterface {
    constructor() {
        super(UsersRoles);
    }
    public async bulkCreate(records: Optional<any, string>[], transaction? : Transaction): Promise<any> {
        console.log('RECORDS : ', records);
        
        const options : BulkCreateOptions = {};
        if (transaction) {
            options.transaction = transaction;
        }
        return await UsersRoles.bulkCreate(records, options);
    }
    public async bulkDeleteByUserId(userId: number, transaction? : Transaction): Promise<any> {
        const options : DestroyOptions = {};
        if (transaction) {
            options.transaction = transaction;
        }
        options.where = {
            user_id : userId
        };
        return await UsersRoles.destroy(options);
    }
}
export { UsersRolesRepository };