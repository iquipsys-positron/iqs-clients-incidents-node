"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const IncidentsNullClientV1_1 = require("../version1/IncidentsNullClientV1");
const IncidentsDirectClientV1_1 = require("../version1/IncidentsDirectClientV1");
const IncidentsHttpClientV1_1 = require("../version1/IncidentsHttpClientV1");
const IncidentsLambdaClientV1_1 = require("../version1/IncidentsLambdaClientV1");
const IncidentsHttpProxyClientV1_1 = require("../version1/IncidentsHttpProxyClientV1");
class IncidentsClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(IncidentsClientFactory.NullClientV1Descriptor, IncidentsNullClientV1_1.IncidentsNullClientV1);
        this.registerAsType(IncidentsClientFactory.DirectClientV1Descriptor, IncidentsDirectClientV1_1.IncidentsDirectClientV1);
        this.registerAsType(IncidentsClientFactory.HttpClientV1Descriptor, IncidentsHttpClientV1_1.IncidentsHttpClientV1);
        this.registerAsType(IncidentsClientFactory.LambdaClientV1Descriptor, IncidentsLambdaClientV1_1.IncidentsLambdaClientV1);
        this.registerAsType(IncidentsClientFactory.HttpProxyClientV1Descriptor, IncidentsHttpProxyClientV1_1.IncidentsHttpProxyClientV1);
    }
}
exports.IncidentsClientFactory = IncidentsClientFactory;
IncidentsClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-incidents', 'factory', 'default', 'default', '1.0');
IncidentsClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-incidents', 'client', 'null', 'default', '1.0');
IncidentsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-incidents', 'client', 'direct', 'default', '1.0');
IncidentsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-incidents', 'client', 'http', 'default', '1.0');
IncidentsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-incidents', 'client', 'lambda', 'default', '1.0');
IncidentsClientFactory.HttpProxyClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-incidents', 'client', 'http-proxy', 'default', '1.0');
//# sourceMappingURL=IncidentsClientFactory.js.map