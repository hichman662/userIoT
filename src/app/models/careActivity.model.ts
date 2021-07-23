/* eslint-disable @typescript-eslint/naming-convention */
import { Medication } from './medication.model';
import { Comunication } from './comunication.model';
import { Appointment } from './appointment.model';
export class CareActivity {
  constructor(
    Id: number,
    Name?: string,
    Description?: string,
    Periodicity?: number,
    Duration?: number,
    Location?: string,
    OutcomeCode?: string,
    TypeActivity?: number,
    ActivityCode?: string,
    Comunications?: Comunication[],
    Appointments?: Appointment[],
    Medications?: Medication | null,
    NutritionOrders?: any
        )
  {}
}
