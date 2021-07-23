/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/naming-convention */
import { CarePlanTemplate } from './carePlanTemplate.model';
export class Goal {
  constructor(
    Id: number,
    Name?: string,
    Description?: string,
    CarePlanTemplate?: CarePlanTemplate,
    LOINCcode?: string
        )
  {}
}
