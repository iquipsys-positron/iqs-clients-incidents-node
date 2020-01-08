"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class IncidentsDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-incidents", "controller", "*", "*", "*"));
    }
    getIncidents(correlationId, orgId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'incidents.get_incidents');
        this._controller.getIncidents(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getIncidentsCount(correlationId, orgId, filter, callback) {
        let timing = this.instrument(correlationId, 'incidents.get_incidents_count');
        this._controller.getIncidentsCount(correlationId, filter, (err, count) => {
            timing.endTiming();
            callback(err, count);
        });
    }
    getIncidentById(correlationId, orgId, incidentId, callback) {
        let timing = this.instrument(correlationId, 'incidents.get_incident_by_id');
        this._controller.getIncidentById(correlationId, incidentId, (err, incident) => {
            timing.endTiming();
            callback(err, incident);
        });
    }
    createIncident(correlationId, orgId, incident, callback) {
        let timing = this.instrument(correlationId, 'incidents.create_incident');
        this._controller.createIncident(correlationId, incident, (err, incident) => {
            timing.endTiming();
            callback(err, incident);
        });
    }
    closeIncident(correlationId, orgId, incidentId, user, resolutionId, resolution, callback) {
        let timing = this.instrument(correlationId, 'incidents.close_incident');
        this._controller.closeIncident(correlationId, incidentId, user, resolutionId, resolution, (err, incident) => {
            timing.endTiming();
            callback(err, incident);
        });
    }
    deleteIncidentById(correlationId, orgId, incidentId, callback) {
        let timing = this.instrument(correlationId, 'incidents.delete_incident_by_id');
        this._controller.deleteIncidentById(correlationId, incidentId, (err, incident) => {
            timing.endTiming();
            callback(err, incident);
        });
    }
}
exports.IncidentsDirectClientV1 = IncidentsDirectClientV1;
//# sourceMappingURL=IncidentsDirectClientV1.js.map