let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { OperationalEventsNullClientV1 } from 'iqs-clients-opevents-node';

import { IncidentsMemoryPersistence } from 'iqs-services-incidents-node';
import { IncidentsController } from 'iqs-services-incidents-node';
import { IIncidentsClientV1 } from '../../src/version1/IIncidentsClientV1';
import { IncidentsDirectClientV1 } from '../../src/version1/IncidentsDirectClientV1';
import { IncidentsClientFixtureV1 } from './IncidentsClientFixtureV1';

suite('IncidentsDirectClientV1', ()=> {
    let client: IncidentsDirectClientV1;
    let fixture: IncidentsClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new IncidentsMemoryPersistence();
        let controller = new IncidentsController();
        let eventsClient = new OperationalEventsNullClientV1();

        let references: References = References.fromTuples(
            new Descriptor('iqs-services-opevents', 'client', 'null', 'default', '1.0'), eventsClient,
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('iqs-services-incidents', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('iqs-services-incidents', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new IncidentsDirectClientV1();
        client.setReferences(references);

        fixture = new IncidentsClientFixtureV1(client);

        client.open(null, done);
    });
    
    suiteTeardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

});
