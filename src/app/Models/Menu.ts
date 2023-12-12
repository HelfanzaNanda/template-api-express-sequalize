import {
    Table, Column, Model, CreatedAt, UpdatedAt, Length, AllowNull, DeletedAt, BelongsTo, ForeignKey, BelongsToMany,
} from 'sequelize-typescript';
import { Permission } from './Permission';
import { MenusPermissions } from './MenusPermissions';

export interface MenuInputModel {
    parent_id : number;
    name: string;
    path: string;
    method: string;
}

export interface MenuModel extends Model<MenuModel, MenuInputModel> {
    id: number;
    parent_id: number;
    name: string;
    path: string;
    method: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    createdBy: number;
    updatedBy: number;
    deletedBy: number;
}

export interface MenuViewModel {
    id: number;
    parent_id: number;
    name: string;
    path: string;
    method: string;
}

@Table({
    underscored : true,
    paranoid : true

})
class Menu extends Model {
    @ForeignKey(() => Menu)
    @AllowNull(true)
    @Column
    parentId!: number;

    @BelongsTo(() => Menu)
    parent! : Menu

    @Length({ min: 1, max: 255 })
    @AllowNull(false)
    @Column
    name!: string;

    @Length({ min: 1, max: 255 })
    @AllowNull(false)
    @Column
    path!: string;
    
    @Length({ min: 1, max: 255 })
    @AllowNull(false)
    @Column
    method!: string;

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

    @BelongsToMany(() => Permission, () => MenusPermissions, 'menu_id')
    permissions! : Permission[]
}

export { Menu };