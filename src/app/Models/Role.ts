import {
    Table, Column, Model, CreatedAt, UpdatedAt, IsEmail, Length, AllowNull, Unique, Default, DeletedAt, BelongsToMany,
} from 'sequelize-typescript';
import { User } from './User';
import { UsersRoles } from './UsersRoles';

@Table({
    underscored : true,
    paranoid : true

})
class Role extends Model {
    @Length({ min: 3, max: 255 })
    @AllowNull(false)
    @Column
    name!: string;

    @BelongsToMany(() => User, () => UsersRoles, 'role_id')
    users! : User[]

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

export { Role };