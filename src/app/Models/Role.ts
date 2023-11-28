import {
    Table, Column, Model, CreatedAt, UpdatedAt, IsEmail, Length, AllowNull, Unique, Default, DeletedAt,
} from 'sequelize-typescript';

@Table({
    underscored : true
})
class Role extends Model {
    @Length({ min: 3, max: 255 })
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
}

export { Role };