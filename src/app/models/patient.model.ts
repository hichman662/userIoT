/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/naming-convention */

import { PatientProfile } from './patientProfile.model';

export class Patient {
  Id?:             number;
  Email?:          string;
  PatientProfile?: PatientProfile;
}
