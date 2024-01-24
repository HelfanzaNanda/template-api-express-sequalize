
import { UserRepository } from '../Repositories/UserRepository';
import { Role, User } from '../Models';
import { EmailAlreadyInUseError, InvalidCredentialsError, ResourceNotFoundError, UnknownError } from '../Errors';
import { Order, Transaction } from 'sequelize';
import { parseWhere } from '../Utils/helpers';
import { PasswordFacade } from '..//Facades';
import { PhoneAlreadyInUseError } from '../Errors/PhoneAlreadyInUseError';
import { UsersRolesRepository } from '../Repositories/UsersRolesRepository';
import { RoleRepository } from '../Repositories/RoleRepository';
import { sequelize } from '../Utils/connection';

class UserService {
    constructor( 
        private userRepository: UserRepository, 
        private usersRolesRepository : UsersRolesRepository,
        private roleRepository : RoleRepository
    ) { }

    public async all(): Promise<User[]> {
        const users = await this.userRepository.all();
        return users
    }

    public async findOne(id : number): Promise<User> {
        const include = [
            {
                model : Role,
                through: {attributes: []},
                attributes: ['id', 'name']
            }
        ];
        const user = await this.userRepository.findById(id, [], include);
        return user
    }

    public async create(name : string, email : string, password : string, phone : string, roles : string[]): Promise<User | Error> {
        const t = await sequelize.transaction();
        try {
            if (await this.userRepository.emailExists(email)) {
                throw new EmailAlreadyInUseError();
            }
            if (await this.userRepository.phoneExists(email)) {
                throw new PhoneAlreadyInUseError();
            }
            const user = await this.userRepository.create({
                name,
                email,
                password: PasswordFacade.hash(password),
                phone,
            }, t);
    
            const modelRoles = await this.roleRepository.findByNames(roles);
    
            const dataRoles = modelRoles?.map(role => ({userId : user.id, role_id : role.id}));
    
            await this.usersRolesRepository.bulkCreate(dataRoles!!, t);
            await t.commit();

            return user;
        } catch (error : any) {
            await t.rollback();
            if (error instanceof Error) {
                throw new UnknownError(error.stack);
            }
            return error
        }
    }

    public async update(id : number, name : string, email : string, password : string, phone : string, roles : string[]): Promise<User | Error> {
        const t = await sequelize.transaction();
        try {

            const data = this.userRepository.findById(id);
            if (!data) {
                throw new ResourceNotFoundError();
            }

            // if (await this.userRepository.emailExists(email)) {
            //     throw new EmailAlreadyInUseError();
            // }
            // if (await this.userRepository.phoneExists(email)) {
            //     throw new PhoneAlreadyInUseError();
            // }



            const user = await this.userRepository.update(id, {
                name,
                email,
                password: PasswordFacade.hash(password),
                phone,
            }, t);

            this.usersRolesRepository.bulkDeleteByUserId(user.id!!);
    
            const modelRoles = await this.roleRepository.findByNames(roles);
    
            const dataRoles = modelRoles?.map(role => ({userId : user.id, role_id : role.id}));
    
            await this.usersRolesRepository.bulkCreate(dataRoles!!, t);
            await t.commit();

            return user;
        } catch (error : any) {
            await t.rollback();
            return error
        }
    }

    public async delete(id : number): Promise<Boolean | Error> {
        const user = await this.userRepository.delete(id);
        return user;
    }

    public async datatables(limit? : number, offset? : number, order? : Order, filter? : {}, search? : string): Promise<User[]> {
        const include = [
            {
                model : Role,
                through: {attributes: []},
                attributes: ['id', 'name']
            }
        ];

        // const filters = parseWhere(filter);

        const users = await this.userRepository.datatables([], {}, order, include, limit, offset, search);
        return users
    }
}

export { UserService };