/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/naming-convention */

import { AccessMode } from './accessMode.model';
export class PatientAccess {
  constructor(
      Id: number,
      Name?: string,
      Description?: string,
      AccessMode?: AccessMode
        )
  {}
}
