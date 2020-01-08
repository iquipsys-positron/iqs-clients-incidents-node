import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IIncidentsClientV1 } from './IIncidentsClientV1';
import { IncidentV1 } from './IncidentV1';

export class IncidentsNullClientV1 implements IIncidentsClientV1 {
            
    public getIncidents(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<IncidentV1>) => void): void {
        callback(null, new DataPage<IncidentV1>([], 0));
    }

    public getIncidentsCount(correlationId: string, orgId: string, filter: FilterParams, 
        callback: (err: any, count: number) => void): void {
        callback(null, 0);
    }

    public getIncidentById(correlationId: string, orgId: string, incidentId: string, 
        callback: (err: any, incident: IncidentV1) => void): void {
        callback(null, null);
    }

    public createIncident(correlationId: string, orgId: string, incident: IncidentV1, 
        callback: (err: any, incident: IncidentV1) => void): void {
        callback(null, incident);
    }

    public closeIncident(correlationId: string, orgId: string, incidentId: string,
        user: any, resolutionId: string, resolution: string,
        callback: (err: any, incident: IncidentV1) => void): void {
        callback(null, null);
    }

    public deleteIncidentById(correlationId: string, orgId: string, incidentId: string,
        callback: (err: any, incident: IncidentV1) => void): void {
        callback(null, null);
    }
}