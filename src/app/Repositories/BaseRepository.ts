/* eslint-disable class-methods-use-this */

import { Model } from 'sequelize-typescript';
import { BaseRepositoryInterface } from './BaseRepository.interface';
import { ResourceNotFoundError } from '../Errors';
import { CreateOptions, DestroyOptions, FindOptions, Includeable, Order, Transaction, UpdateOptions, or } from 'sequelize';
import { User } from '../Models';


// TODO: Find a way to remove the @ts-ignore comments without getting any errors
abstract class BaseRepository<M extends Model> implements BaseRepositoryInterface {
    constructor(protected model: typeof Model) { }

    public async datatables(attributes?: string[], where? : {}, order? : Order, relations? : Includeable[], limit : number = 5, offset : number = 0, search? : string): Promise<M[]> {
        // const attrs = this.model.;
        // console.log('attrs : ', attrs);
        
        // @ts-ignore
        const options : FindOptions = {};
        if (attributes?.length) {
            options.attributes = attributes;
        }
        
        if (where) {
            options.where = where;
        }
        if (order) {
            options.order = order;
        }
        if (relations?.length) {
            options.include = relations;
        }
        const columns = [];

        
        
        // return this.model.attributes;
    //     for( let key of Object.keys(this.model.attributes))   {
    //         columns.push({
    //             name:key,
    //             type:this.model.attributes[key].type.key
    //         });
    //   }
        // const columns = this.model.attr
        // columns.
        options.limit = limit;
        options.offset = offset;

        // @ts-ignore
        return await this.model.findAndCountAll(options);
    }
    public async all(attributes?: string[], relations? : Includeable[]): Promise<M[]> {
        // @ts-ignore
        const options : FindOptions = {};
        if (attributes?.length) {
            options.attributes = attributes;
        }
        if (relations?.length) {
            options.include = relations;
        }

        // @ts-ignore
        return await this.model.findAll(options);
    }

    public async findById(id: number, attributes?: string[], relations? : Includeable[]): Promise<M> {
        const options : FindOptions = {};
        if (attributes?.length) {
            options.attributes = attributes;
        }
        if (relations?.length) {
            options.include = relations;
        }
        // @ts-ignore
        const resource = await this.model.findByPk(id, options);

        if (resource) {
            // @ts-ignore
            return resource;
        }

        throw new ResourceNotFoundError();
    }

    public async create(data: any, transaction? : Transaction, relations? : Includeable[]): Promise<M> {
        const options : CreateOptions = {};
        if (relations?.length) {
            options.include = relations;
        }
        if (transaction) {
            options.transaction = transaction;
        }
        console.log('options : ', options);
        
        // @ts-ignore
        return this.model.create(data, options);
    }

    public async update(id: number, data: any, transaction? : Transaction, relations? : Includeable[]): Promise<M> {
        const resource = await this.findById(id);

        if (resource) {
            const options : FindOptions = {};
    
            if (relations?.length) {
                options.include = relations;
            }
            if (transaction) {
                options.transaction = transaction;
            }
            // @ts-ignore
            return resource.update(data, options);
        }

        throw new ResourceNotFoundError();
    }

    public async delete(id: number, transaction? : Transaction): Promise<boolean> {
        const resource = await this.findById(id);

        if (resource) {
            const options : DestroyOptions = {};
            if (transaction) {
                options.transaction = transaction;
            }
            // @ts-ignore
            await resource.destroy(options);
            return true;
        }

        throw new ResourceNotFoundError();
    }
}

export { BaseRepository };