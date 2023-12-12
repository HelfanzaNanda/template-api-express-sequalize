import { Includeable, Order } from "sequelize";

interface BaseRepositoryInterface {
    all(attributes?: string[], relations?: Includeable[]): Promise<any[]>;

    findById(id: number, attributes?: string[]): Promise<any>;

    create(data: any): Promise<any>;

    update(id: number, data: any): Promise<any>;

    delete(id: number): Promise<boolean>;

    datatables(
        attributes?: string[],
        where?: {},
        order?: Order,
        relations?: Includeable[], 
        limit?: number, 
        offset?: number,
        search? : string
    ): Promise<any[]>;

}

export { BaseRepositoryInterface };