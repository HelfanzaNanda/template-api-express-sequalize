import {
    Table, Column, Model, CreatedAt, UpdatedAt, Length, AllowNull, DeletedAt, BelongsTo, ForeignKey, BelongsToMany,
} from 'sequelize-typescript';
import { Menu } from './Menu';
import { MenusPermissions } from './MenusPermissions';
import { RolesPermissions } from './RolesPermissions';  
import { Role } from './Role';


export interface PermissionInputModel {
    name: string;
}

export interface PermissionModel extends Model<PermissionModel, PermissionInputModel> {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    createdBy: number;
    updatedBy: number;
    deletedBy: number;
}

export interface PermissionViewModel {
    id: number;
    name: string;
}

@Table({
    underscored : true,
    paranoid : true

})
class Permission extends Model {
    @Length({ min: 1, max: 255 })
    @AllowNull(false)
    @Column
    name!: string;

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

    @BelongsToMany(() => Menu, () => MenusPermissions, 'permission_id')
    menus! : Menu[]

    @BelongsToMany(() => Role, () => RolesPermissions, 'permission_id')
    roles! : Role[]
}

export { Permission };