import { BaseRepositoryInterface } from './BaseRepository.interface';
import { BaseRepository } from './BaseRepository';
import { Menu } from '../Models/Menu';
import { Invitation } from '../Models/Invitation';
import { Order } from 'sequelize';

interface InvitationRepositoryInterface extends BaseRepositoryInterface {
    getLastInvitation(): Promise<any | null>;
}
/* eslint-disable class-methods-use-this */


class InvitationRepository extends BaseRepository<Invitation> implements InvitationRepositoryInterface {
    constructor() {
        super(Invitation);
    }
    public async getLastInvitation(): Promise<Invitation | null> {
        const order : Order = [['id', 'desc']];
        const data = await Invitation.findOne({
            attributes: ['invitationId'],
            order : order,
        })
        return data;
    }

}
export { InvitationRepository };