"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class IncidentsLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('incidents');
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
exports.IncidentsLambdaClientV1 = IncidentsLambdaClientV1;
//# sourceMappingURL=IncidentsLambdaClientV1.js.map