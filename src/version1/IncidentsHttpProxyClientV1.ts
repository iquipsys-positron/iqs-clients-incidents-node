import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { ClustersProxyHttpClientV1 } from 'pip-clients-clusters-node';

import { IncidentV1 } from './IncidentV1';
import { IIncidentsClientV1 } from './IIncidentsClientV1';
import { IncidentsHttpClientV1 } from './IncidentsHttpClientV1';

export class IncidentsHttpProxyClientV1 extends ClustersProxyHttpClientV1<IIncidentsClientV1>
    implements IIncidentsClientV1 {       
    
    constructor(config?: any) {
        super(IncidentsHttpClientV1, 'iqs-services-incidents', 30020);

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getIncidents(correlationId: string, orgId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<IncidentV1>) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getIncidents(correlationId, orgId, filter, paging, callback);
        });
    }

    public getIncidentsCount(correlationId: string, orgId: string, filter: FilterParams,
        callback: (err: any, count: number) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getIncidentsCount(correlationId, orgId, filter, callback);
        });
    }

    public getIncidentById(correlationId: string, orgId: string, incidentId: string,
        callback: (err: any, incident: IncidentV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.getIncidentById(correlationId, orgId, incidentId, callback);
        });
    }

    public createIncident(correlationId: string, orgId: string, incident: IncidentV1,
        callback: (err: any, incident: IncidentV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.createIncident(correlationId, orgId, incident, callback);
        });
    }

    public closeIncident(correlationId: string, orgId: string, incidentId: string,
        user: any, resolutionId: string, resolution: string,
        callback: (err: any, incident: IncidentV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.closeIncident(correlationId, orgId, incidentId, user, resolutionId, resolution, callback);
        });
    }

    public deleteIncidentById(correlationId: string, orgId: string, incidentId: string,
        callback: (err: any, incident: IncidentV1) => void): void {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }

            client.deleteIncidentById(correlationId, orgId, incidentId, callback);
        });
    }
    
}
