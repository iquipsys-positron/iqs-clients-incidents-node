import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { IIncidentsClientV1 } from './IIncidentsClientV1';
import { IncidentV1 } from './IncidentV1';
export declare class IncidentsNullClientV1 implements IIncidentsClientV1 {
    getIncidents(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<IncidentV1>) => void): void;
    getIncidentsCount(correlationId: string, orgId: string, filter: FilterParams, callback: (err: any, count: number) => void): void;
    getIncidentById(correlationId: string, orgId: string, incidentId: string, callback: (err: any, incident: IncidentV1) => void): void;
    createIncident(correlationId: string, orgId: string, incident: IncidentV1, callback: (err: any, incident: IncidentV1) => void): void;
    closeIncident(correlationId: string, orgId: string, incidentId: string, user: any, resolutionId: string, resolution: string, callback: (err: any, incident: IncidentV1) => void): void;
    deleteIncidentById(correlationId: string, orgId: string, incidentId: string, callback: (err: any, incident: IncidentV1) => void): void;
}
