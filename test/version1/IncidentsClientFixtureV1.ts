let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { IncidentV1 } from '../../src/version1/IncidentV1';
import { SeverityV1 } from '../../src/version1/SeverityV1';
import { IIncidentsClientV1 } from '../../src/version1/IIncidentsClientV1';

let INCIDENT1: IncidentV1 = {
    id: '1',
    org_id: '1',
    create_time: new Date(),
    closed: false,
    time: new Date(),
    rule_id: '1',
    event_id: '1',
    object_id: '1',
    severity: SeverityV1.Medium,
    description: 'Test incident #1'
};
let INCIDENT2: IncidentV1 = {
    id: '2',
    org_id: '1',
    create_time: new Date(),
    closed: false,
    time: new Date(),
    rule_id: '1',
    event_id: '2',
    severity: SeverityV1.High,
    description: 'Test incident #2'
};

export class IncidentsClientFixtureV1 {
    private _client: IIncidentsClientV1;
    
    constructor(client: IIncidentsClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        let incident1, incident2;

        async.series([
        // Create one incident
            (callback) => {
                this._client.createIncident(
                    null,
                    '1',
                    INCIDENT1,
                    (err, incident) => {
                        assert.isNull(err);

                        assert.isObject(incident);
                        assert.equal(incident.org_id, INCIDENT1.org_id);
                        assert.equal(incident.rule_id, INCIDENT1.rule_id);
                        assert.equal(incident.description, INCIDENT1.description);

                        incident1 = incident;

                        callback();
                    }
                );
            },
        // Create another incident
            (callback) => {
                this._client.createIncident(
                    null,
                    '1',
                    INCIDENT2,
                    (err, incident) => {
                        assert.isNull(err);

                        assert.isObject(incident);
                        assert.equal(incident.org_id, INCIDENT2.org_id);
                        assert.equal(incident.rule_id, INCIDENT2.rule_id);
                        assert.equal(incident.description, INCIDENT2.description);

                        incident2 = incident;

                        callback();
                    }
                );
            },
        // Get all incidents
            (callback) => {
                this._client.getIncidents(
                    null,
                    '1',
                    null,
                    new PagingParams(0, 5, false),
                    (err, incidents) => {
                        assert.isNull(err);

                        assert.isObject(incidents);
                        assert.isTrue(incidents.data.length >= 2);

                        callback();
                    }
                );
            },
            // Get all incidents
            (callback) => {
                this._client.getIncidentsCount(
                    null,
                    '1',
                    null,
                    (err, count) => {
                        assert.isNull(err);

                        assert.isTrue(count >= 2);

                        callback();
                    }
                );
            },
            // Close the incident
            (callback) => {
                this._client.closeIncident(
                    null,
                    '1',
                    incident1.id, { id: '1' }, '1', 'Test resolution',
                    (err, incident) => {
                        assert.isNull(err);

                        assert.isObject(incident);
                        assert.equal(incident.resolution, 'Test resolution');
                        assert.isTrue(incident.closed);
                        assert.equal(incident.resolution_id, '1');
 
                        incident1 = incident;

                        callback();
                    }
                );
            },
        // Delete incident
            (callback) => {
                this._client.deleteIncidentById(
                    null,
                    '1',
                    incident1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete incident
            (callback) => {
                this._client.getIncidentById(
                    null,
                    '1',
                    incident1.id,
                    (err, incident) => {
                        assert.isNull(err);
                        
                        assert.isNull(incident || null);

                        callback();
                    }
                );
            }
        ], done);
    }
}
