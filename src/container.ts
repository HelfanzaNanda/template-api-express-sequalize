import { Container } from 'injektion';
import { UserRepository, } from './app/Repositories';

Container.namedBind('UserRepository', UserRepository);

export default container;