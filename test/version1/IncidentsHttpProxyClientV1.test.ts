let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { ClusterV1 } from 'pip-clients-clusters-node';
import { ClustersMemoryClientV1 } from 'pip-clients-clusters-node';
import { OperationalEventsNullClientV1 } from 'iqs-clients-opevents-node';

import { IncidentsMemoryPersistence } from 'iqs-services-incidents-node';
import { IncidentsController } from 'iqs-services-incidents-node';
import { IncidentsHttpServiceV1 } from 'iqs-services-incidents-node';
import { IIncidentsClientV1 } from '../../src/version1/IIncidentsClientV1';
import { IncidentsHttpProxyClientV1 } from '../../src/version1/IncidentsHttpProxyClientV1';
import { IncidentsClientFixtureV1 } from './IncidentsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);
var CLUSTER: ClusterV1 = {
    id: '1',
    name: 'test',
    type: 'organizations',
    active: true,
    api_host: 'localhost',
    service_ports: { 
        'iqs-services-incidents': 3000 
    },
    active_tenants: ['1']
}

suite('IncidentsHttpProxyClientV1', ()=> {
    let service: IncidentsHttpServiceV1;
    let client: IncidentsHttpProxyClientV1;
    let fixture: IncidentsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new IncidentsMemoryPersistence();
        let controller = new IncidentsController();
        let eventsClient = new OperationalEventsNullClientV1();

        let clustersClient = new ClustersMemoryClientV1();
        clustersClient.createCluster(null, CLUSTER, (err, cluster) => {});        

        service = new IncidentsHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('iqs-services-opevents', 'client', 'null', 'default', '1.0'), eventsClient,
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-clusters', 'client', 'memory', 'default', '1.0'), clustersClient,
            new Descriptor('iqs-services-incidents', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-incidents', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('iqs-services-incidents', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new IncidentsHttpProxyClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new IncidentsClientFixtureV1(client);

        service.open(null, (err) => {
            done(err);
        });
    });
    
    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
