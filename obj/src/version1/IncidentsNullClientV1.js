"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class IncidentsNullClientV1 {
    getIncidents(correlationId, orgId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getIncidentsCount(correlationId, orgId, filter, callback) {
        callback(null, 0);
    }
    getIncidentById(correlationId, orgId, incidentId, callback) {
        callback(null, null);
    }
    createIncident(correlationId, orgId, incident, callback) {
        callback(null, incident);
    }
    closeIncident(correlationId, orgId, incidentId, user, resolutionId, resolution, callback) {
        callback(null, null);
    }
    deleteIncidentById(correlationId, orgId, incidentId, callback) {
        callback(null, null);
    }
}
exports.IncidentsNullClientV1 = IncidentsNullClientV1;
//# sourceMappingURL=IncidentsNullClientV1.js.map