"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class IncidentsHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/incidents');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getIncidents(correlationId, orgId, filter, paging, callback) {
        this.callCommand('get_incidents', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getIncidentsCount(correlationId, orgId, filter, callback) {
        this.callCommand('get_incidents_count', correlationId, {
            filter: filter
        }, (err, result) => {
            let count = result != null ? result.count : null;
            callback(null, count);
        });
    }
    getIncidentById(correlationId, orgId, incidentId, callback) {
        this.callCommand('get_incident_by_id', correlationId, {
            incident_id: incidentId
        }, callback);
    }
    createIncident(correlationId, orgId, incident, callback) {
        this.callCommand('create_incident', correlationId, {
            incident: incident
        }, callback);
    }
    closeIncident(correlationId, orgId, incidentId, user, resolutionId, resolution, callback) {
        this.callCommand('close_incident', correlationId, {
            incident_id: incidentId,
            user: user,
            resolution: resolution,
            resolution_id: resolutionId
        }, callback);
    }
    deleteIncidentById(correlationId, orgId, incidentId, callback) {
        this.callCommand('delete_incident_by_id', correlationId, {
            incident_id: incidentId
        }, callback);
    }
}
exports.IncidentsHttpClientV1 = IncidentsHttpClientV1;
//# sourceMappingURL=IncidentsHttpClientV1.js.map