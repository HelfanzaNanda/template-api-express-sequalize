import {
    Table, Column, Model, CreatedAt, UpdatedAt, IsEmail, Length, AllowNull, Unique, Default, DeletedAt, ForeignKey, Min, BelongsTo,
} from 'sequelize-typescript';
import { Menu } from './Menu';
import { Permission } from './Permission';

@Table({
    underscored : true,
    paranoid : true

})
class MenusPermissions extends Model {
    @ForeignKey(() => Menu)
    @AllowNull(false)
    @Column
    menuId!: number;

    @BelongsTo(() => Menu)
    menu! : Menu

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

export { MenusPermissions };