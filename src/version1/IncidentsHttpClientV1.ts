import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';

import { IncidentV1 } from './IncidentV1';
import { IIncidentsClientV1 } from './IIncidentsClientV1';

export class IncidentsHttpClientV1 extends CommandableHttpClient implements IIncidentsClientV1 {       
    
    constructor(config?: any) {
        super('v1/incidents');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getIncidents(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<IncidentV1>) => void): void {
        this.callCommand( 
            'get_incidents', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getIncidentsCount(correlationId: string, orgId: string, filter: FilterParams,
        callback: (err: any, count: number) => void): void {
        this.callCommand( 
            'get_incidents_count', 
            correlationId,
            {
                filter: filter
            }, 
            (err, result) => {
                let count = result != null ? result.count : null;
                callback(null, count);
            }
        );
    }

    public getIncidentById(correlationId: string, orgId: string, incidentId: string,
        callback: (err: any, incident: IncidentV1) => void): void {
        this.callCommand( 
            'get_incident_by_id',
            correlationId,
            {
                incident_id: incidentId
            }, 
            callback
        );        
    }

    public createIncident(correlationId: string, orgId: string, incident: IncidentV1,
        callback: (err: any, incident: IncidentV1) => void): void {
        this.callCommand(
            'create_incident',
            correlationId,
            {
                incident: incident
            }, 
            callback
        );
    }

    public closeIncident(correlationId: string, orgId: string, incidentId: string,
        user: any, resolutionId: string, resolution: string,
        callback: (err: any, incident: IncidentV1) => void): void {
        
        this.callCommand(
            'close_incident', 
            correlationId,
            {
                incident_id: incidentId,
                user: user,
                resolution: resolution,
                resolution_id: resolutionId
            }, 
            callback
        );
    }

    public deleteIncidentById(correlationId: string, orgId: string, incidentId: string,
        callback: (err: any, incident: IncidentV1) => void): void {
        this.callCommand(
            'delete_incident_by_id', 
            correlationId,
            {
                incident_id: incidentId
            }, 
            callback
        );
    }
    
}
