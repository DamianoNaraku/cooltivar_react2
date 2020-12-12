import {ICoordinate} from "./domain/IField";
import {StyleProp, ViewStyle} from "react-native";

export const AUTHENTICATE = "AUTHENTICATE";
export type AUTHENTICATE = typeof AUTHENTICATE;

export const UNAUTHENTICATE = "UNAUTHENTICATE";
export type UNAUTHENTICATE = typeof UNAUTHENTICATE;


process.env.REACT_APP_NOT_SECRET_CODE;

class API_Structure {
    root: string;
    // get_all: string; // lista tutte (era roba admin)
    list: string; // lista mie
    get: (id: number) => string;
    delete: (id: number) => string;
    patch: (id: number, val: unknown) => string;
    constructor(root: string = '') {
        this.root = root;
        this.list = root;
        this.get = this.delete = (id: number): string => { return this.root + '/' + id; }
        this.patch = (id: number, val: unknown): string => { return this.root + '/' + id; }
    }
}

const apirs = process.env.API_ROOT_SERVER;
const fieldroot = apirs + '/fields/';
const cultivationroot = (fieldid: number) => fieldroot + fieldid + '/';

export type genericObject = { [key: string]: any; }
export type CssPropRules = { [key: string]: StyleProp<ViewStyle>; }


export const API = {
    fields: {
            root: fieldroot,
            list: fieldroot,
            get:  (id: number): string => { return fieldroot + id; },
            delete: (id: number): string => { return fieldroot + id; },
            patch: (id: number): string => { return fieldroot + id; }
    },
    cultivations: {
            root: cultivationroot,
            list: cultivationroot,
            get: (field_id: number, cultivation_id: number): string => { return cultivationroot(field_id) + cultivation_id; },
            delete: (field_id: number, cultivation_id: number): string => { return cultivationroot(field_id) + cultivation_id; },
            patch: (field_id: number, cultivation_id: number): string => { return cultivationroot(field_id) + cultivation_id; },
    },
    getMeteo: (coordinate: ICoordinate): string => { return 'todo'; },


};
