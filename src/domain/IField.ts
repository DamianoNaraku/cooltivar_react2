import {ICultivation} from "./ICultivation";
import {IUser} from "./IUser";
import {AbstractEntity} from "./AbstractEntity";

export interface ICoordinate {
    lat: number;
    lng: number;
}

export interface IField extends AbstractEntity {
    name: string;
    description: string;
    city?: string;
    owner?: IUser;
    cultivations: ICultivation[];
    coordinates: ICoordinate[];
}
