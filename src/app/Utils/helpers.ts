import { Op } from "sequelize";

function parseBoolean(value: string): boolean {
    return value.trim().toLowerCase() === 'true';
}

function parseWhere(filters : any) {
    if (!filters) {
        return {}
    }
    
    const operators : {[key : string] : any} = {
        'like' : Op.like,
        'and' : Op.and,
        'or' : Op.or,
        'gte' : Op.gte,
        'gt' : Op.gt,
        'lte' : Op.lte,
        'lt' : Op.lt,
        'between' : Op.between,
        'in' : Op.in,
        'eq' : Op.eq,
    };

    const result : {[key : string] : any} = {};

    const fields = Object.keys(filters);
    fields.forEach(field => {
        const operator = filters[field];
        const operatorKeys = Object.keys(operator);
        operatorKeys.forEach(op => {
            let value = operator[op] as string;
            let opt = operators[op];
            if (!opt) {
                opt = op;
            }

            if (op == 'like') {
                value = `%${value}%`;
            }

            result[field] = {
                [opt] : value.toLowerCase()
            }
        })
    })
    return result;
    

}

export { parseBoolean, parseWhere };