/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-shadow */
import { CarePlanTemplate } from './carePlanTemplate.model';
export class CarePlan {
  constructor(
    Id: number,
    Name?: string,
    Description?: string,
    CarePlanTemplate?: CarePlanTemplate
        )
  {}
}
