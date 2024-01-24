import { ResourceNotFoundError } from '../Errors';
import { parseWhere } from '../Utils/helpers';
import { InvitationRepository } from '../Repositories/InvitationRepository';
import { Invitation, InvitationInputModel, InvitationStatusEnum } from '../Models/Invitation';
import { Order } from 'sequelize';
class InvitationService {
    constructor(private invitationRepository: InvitationRepository) { }

    public async all(): Promise<Invitation[]> {
        const datas = await this.invitationRepository.all();
        return datas
    }

    public async findOne(id: number): Promise<Invitation> {
        const data = await this.invitationRepository.findById(id, [], []);
        return data
    }

    public async create(params: InvitationInputModel): Promise<Invitation | Error> {
        const number = await this.generateInvitationId();
        params.invitationId = number;
        params.status = InvitationStatusEnum.DRAFT;
        const data = await this.invitationRepository.create(params);
        return data;
    }

    public async update(id: number, name: string): Promise<Invitation | Error> {
        const exist = this.invitationRepository.findById(id);
        if (!exist) {
            throw new ResourceNotFoundError();
        }


        const data = await this.invitationRepository.update(id, {
            name,
        });

        return data;

    }

    public async delete(id: number): Promise<Boolean | Error> {
        const data = await this.invitationRepository.delete(id);
        return data;
    }

    public async datatables(limit?: number, offset?: number, order?: Order, filter?: {}): Promise<Invitation[]> {

        const filters = parseWhere(filter);
        const datas = await this.invitationRepository.datatables([], filters, order, [], limit, offset);
        return datas
    }

    private async generateInvitationId(){
        const data = await this.invitationRepository.getLastInvitation();
        let number = 1;
        let invitation_id = null;
        console.log('data :', data);
        
        if (data) { 
            number = parseInt(data.invitationId.replace(/^\D+/g, ''));
            number++;
        }
        invitation_id = number.toString().padStart(4, '0'); 
        const result = `ISEL-${invitation_id}`;
        return result;
    } 
}

export { InvitationService };