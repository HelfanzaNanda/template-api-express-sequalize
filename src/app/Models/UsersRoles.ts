import {
    Table, Column, Model, CreatedAt, UpdatedAt, IsEmail, Length, AllowNull, Unique, Default, DeletedAt, ForeignKey, Min, BelongsTo,
} from 'sequelize-typescript';
import { User } from './User';
import { Role } from './Role';

@Table
class UsersRoles extends Model {
    @ForeignKey(() => User)
    @AllowNull(false)
    @Column
    userid!: number;

    @BelongsTo(() => User)
    user! : User

    @ForeignKey(() => Role)
    @AllowNull(false)
    @Column
    roleId!: number;

    @BelongsTo(() => Role)
    role! : Role

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

export { UsersRoles };