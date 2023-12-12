import { TokenFacade } from "../Facades";
import { Request } from "express";
import { Op } from "sequelize";

interface JwtRole {
    id : number;
    name : number;
}
interface JwtUserPayload {
    id : number,
    email : string,
    name : string,
    roles : JwtRole[],
    iat : number,
    exp : number
}


function getUserId(request : Request) {
    let token = request.headers.authorization?.toString().split(" ")[1]!!;

    const { data } = TokenFacade.verify(token);
    return data;
    // console.log('data : ', data);
}
function getRoleId(request : Request) {
    let token = request.headers.authorization?.toString().split(" ")[1]!!;

    const res = TokenFacade.verify(token);
    const data = res.data as unknown as JwtUserPayload;
    return data.roles[0].id;
}

function getParamsValidated(request : Request, rules : Object) {
    const body = request.body;

    const result : {[ key : string ] : any} = {};
    const keys = Object.keys(rules);
    keys.forEach(field => {
        result[field] = body[field];
    })
    return result;
}

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

export { 
    parseBoolean, parseWhere, 
    getParamsValidated, getUserId,
    getRoleId
 };