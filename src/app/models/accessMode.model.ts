/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-shadow */
import { AdaptationDetailRequired } from './adaptationDetailRequired.model';
import { AdaptationRequest } from './adaptationRequest.model';
import { AdaptationTypeRequired } from './adaptationTypeRequired.model';

export class AccessMode {
  constructor(
    Id: number,
    Patient_oid?: number,
    Name?: string,
    Disability_oid?: number,
    Description?: string,
    DeviceTemplate_oid?: number[],
    TypeAccessMode?: number,
    AdaptationTypeRequired?: AdaptationTypeRequired [],
    AdaptationRequest?: AdaptationRequest[],
    AdaptationDetailRequired?: AdaptationDetailRequired[]
        )
  {}
}
