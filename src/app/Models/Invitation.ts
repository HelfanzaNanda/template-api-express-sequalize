import {
    Table, Column, Model, CreatedAt, UpdatedAt, Length, AllowNull, DeletedAt, BelongsTo, ForeignKey, BelongsToMany,
} from 'sequelize-typescript';
import { Permission } from './Permission';
import { MenusPermissions } from './MenusPermissions';

export enum InvitationStatusEnum {
    DRAFT = 'DRAFT',
    HAS_BEEN_PRINTED = 'HAS_BEEN_PRINTED',
    AN_EMAIL_HAS_BEEN_SENT = 'AN_EMAIL_HAS_BEEN_SENT',
    IS_PRESENT = 'IS_PRESENT',
}

export interface InvitationInputModel {
    invitationId: string;
    name: string;
    address: string;
    status: string;
    // is_present: boolean;
}

export interface invitationModel extends Model<invitationModel, InvitationInputModel> {
    id: number;
    invitationId: string;
    name: string;
    address: string;
    status: string;
    // is_present: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    createdBy: number;
    updatedBy: number;
    deletedBy: number;
}

export interface InvitationViewModel {
    id: number;
    invitationId: string;
    name: string;
    address: string;
    status: string;
    // is_present: boolean;
}

@Table({
    underscored: true,
    paranoid: true

})
class Invitation extends Model {

    @Length({ min: 1, max: 255 })
    @AllowNull(false)
    @Column
    invitationId!: string;

    @Length({ min: 1, max: 255 })
    @AllowNull(false)
    @Column
    name!: string;

    @Length({ min: 1, max: 255 })
    @AllowNull(false)
    @Column
    address!: string;

    @Length({ min: 1, max: 255 })
    @AllowNull(false)
    @Column
    status!: string;

    @CreatedAt
    createdAt!: Date;

    @UpdatedAt
    updatedAt!: Date;

    @DeletedAt
    deletedAt!: Date;

    @Column
    createdBy!: number;

    @Column
    updatedBy!: number;

    @Column
    deletedBy!: number;

}

export { Invitation };