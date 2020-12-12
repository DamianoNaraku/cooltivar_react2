import {ICoordinate, IField} from "./IField";
import {AbstractEntity} from "./AbstractEntity";

export interface IUser extends AbstractEntity {
    mail: string;
    password: string;
    fields: IField[];
    favLocation: ICoordinate;
}
