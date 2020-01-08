import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IIncidentsClientV1 } from './IIncidentsClientV1';
//import { IIncidentsController } from 'iqs-services-incidents-node';
import { IncidentV1 } from './IncidentV1';

export class IncidentsDirectClientV1 extends DirectClient<any> implements IIncidentsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-incidents", "controller", "*", "*", "*"))
    }

    public getIncidents(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<IncidentV1>) => void): void {
        let timing = this.instrument(correlationId, 'incidents.get_incidents');
        this._controller.getIncidents(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getIncidentsCount(correlationId: string, orgId: string, filter: FilterParams, 
        callback: (err: any, count: number) => void): void {
        let timing = this.instrument(correlationId, 'incidents.get_incidents_count');
        this._controller.getIncidentsCount(correlationId, filter, (err, count) => {
            timing.endTiming();
            callback(err, count);
        });
    }

    public getIncidentById(correlationId: string, orgId: string, incidentId: string, 
        callback: (err: any, incident: IncidentV1) => void): void {
        let timing = this.instrument(correlationId, 'incidents.get_incident_by_id');
        this._controller.getIncidentById(correlationId, incidentId, (err, incident) => {
            timing.endTiming();
            callback(err, incident);
        });
    }

    public createIncident(correlationId: string, orgId: string, incident: IncidentV1, 
        callback: (err: any, incident: IncidentV1) => void): void {
        let timing = this.instrument(correlationId, 'incidents.create_incident');
        this._controller.createIncident(correlationId, incident, (err, incident) => {
            timing.endTiming();
            callback(err, incident);
        });
    }

    public closeIncident(correlationId: string, orgId: string, incidentId: string,
        user: any, resolutionId: string, resolution: string,
        callback: (err: any, incident: IncidentV1) => void): void {
        let timing = this.instrument(correlationId, 'incidents.close_incident');
        this._controller.closeIncident(correlationId, incidentId, user, resolutionId, resolution, (err, incident) => {
            timing.endTiming();
            callback(err, incident);
        });
    }

    public deleteIncidentById(correlationId: string, orgId: string, incidentId: string,
        callback: (err: any, incident: IncidentV1) => void): void {
        let timing = this.instrument(correlationId, 'incidents.delete_incident_by_id');
        this._controller.deleteIncidentById(correlationId, incidentId, (err, incident) => {
            timing.endTiming();
            callback(err, incident);
        });
    }
}