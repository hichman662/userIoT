/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */

import { Attribute } from "./attribute.model";
export class Entity {

    Id: number;
    OriginAssociations: any[];
    TargetAssociations: any[];
    Attributes: Attribute[];
    Operations: any[];
}
