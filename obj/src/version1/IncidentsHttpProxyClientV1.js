"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_clients_clusters_node_1 = require("pip-clients-clusters-node");
const IncidentsHttpClientV1_1 = require("./IncidentsHttpClientV1");
class IncidentsHttpProxyClientV1 extends pip_clients_clusters_node_1.ClustersProxyHttpClientV1 {
    constructor(config) {
        super(IncidentsHttpClientV1_1.IncidentsHttpClientV1, 'iqs-services-incidents', 30020);
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getIncidents(correlationId, orgId, filter, paging, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getIncidents(correlationId, orgId, filter, paging, callback);
        });
    }
    getIncidentsCount(correlationId, orgId, filter, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getIncidentsCount(correlationId, orgId, filter, callback);
        });
    }
    getIncidentById(correlationId, orgId, incidentId, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.getIncidentById(correlationId, orgId, incidentId, callback);
        });
    }
    createIncident(correlationId, orgId, incident, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.createIncident(correlationId, orgId, incident, callback);
        });
    }
    closeIncident(correlationId, orgId, incidentId, user, resolutionId, resolution, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.closeIncident(correlationId, orgId, incidentId, user, resolutionId, resolution, callback);
        });
    }
    deleteIncidentById(correlationId, orgId, incidentId, callback) {
        this.getClient(correlationId, orgId, (err, client) => {
            if (err) {
                callback(err, null);
                return;
            }
            client.deleteIncidentById(correlationId, orgId, incidentId, callback);
        });
    }
}
exports.IncidentsHttpProxyClientV1 = IncidentsHttpProxyClientV1;
//# sourceMappingURL=IncidentsHttpProxyClientV1.js.map