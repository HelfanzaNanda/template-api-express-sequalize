import {
    Table, Column, Model, CreatedAt, UpdatedAt, IsEmail, Length, AllowNull, Unique, Default, DeletedAt, BelongsTo, ForeignKey,
} from 'sequelize-typescript';
import { City } from './City';

@Table
class User extends Model {
    @Length({ min: 3, max: 255 })
    @AllowNull(false)
    @Column
    name!: string;

    @IsEmail
    @Length({ max: 254 })
    @Unique
    @AllowNull(false)
    @Column
    email!: string;
    
    @Length({ max: 20 })
    @Unique
    @AllowNull(false)
    @Column
    phone!: string;

    @Column
    emailVerifiedAt! : Date;

    @Column
    phoneVerifiedAt! : Date;


    @Length({ max: 60 })
    @AllowNull(false)
    @Column
    password!: string;

    @ForeignKey(() => City)
    @AllowNull(false)
    @Column
    cityId!: number;

    @BelongsTo(() => City)
    city! : City

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

export { User };