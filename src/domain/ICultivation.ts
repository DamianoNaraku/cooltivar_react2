import {IField} from "./IField";
import {AbstractEntity} from "./AbstractEntity";

export interface ICultivation extends AbstractEntity {
    name: string;
    description: string;

    field: IField;
    sowingDate: number;
    harvestDate: number;
    harvestKg: number;
    isArchived: boolean;
    actions: any; // questo non so bene come modellarlo e se unirle tutte in un array o no.
}
