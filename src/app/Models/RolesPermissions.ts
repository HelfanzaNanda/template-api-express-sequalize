import {
    Table, Column, Model, CreatedAt, UpdatedAt,  AllowNull, Unique, Default, DeletedAt, ForeignKey, Min, BelongsTo,
} from 'sequelize-typescript';
import { Permission } from './Permission';
import { Role } from './Role';



export interface RolesPermissionsInputModel {
    role_id : number;
    permission_id: string;
}

export interface RolesPermissionsModel extends Model<RolesPermissionsModel, RolesPermissionsInputModel> {
    role_id : number;
    permission_id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    createdBy: number;
    updatedBy: number;
    deletedBy: number;
}

export interface MenuViewModel {
    role_id : number;
    permission_id: string;
}

@Table({
    underscored : true,
    paranoid : true

})
class RolesPermissions extends Model {
    @ForeignKey(() => Role)
    @AllowNull(false)
    @Column
    roleId!: number;

    @BelongsTo(() => Role)
    role! : Role

    @ForeignKey(() => Permission)
    @AllowNull(false)
    @Column
    permissionId!: number;

    @BelongsTo(() => Permission)
    permission! : Permission

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

export { RolesPermissions };