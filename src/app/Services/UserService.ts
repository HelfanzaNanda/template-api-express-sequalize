
import { UserRepository } from 'app/Repositories/UserRepository';
import { User } from '../Models';
import { InvalidCredentialsError } from 'app/Errors';

class UserService {
    constructor( private userRepository: UserRepository, ) { }

    public async activate(email: string): Promise<User> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new InvalidCredentialsError();
        }

        return this.userRepository.update(user.id, {
            email_verified_at : new Date()
        })
    }
}

export { UserService };