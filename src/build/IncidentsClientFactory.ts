import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { IncidentsNullClientV1 } from '../version1/IncidentsNullClientV1';
import { IncidentsDirectClientV1 } from '../version1/IncidentsDirectClientV1';
import { IncidentsHttpClientV1 } from '../version1/IncidentsHttpClientV1';
import { IncidentsLambdaClientV1 } from '../version1/IncidentsLambdaClientV1';
import { IncidentsHttpProxyClientV1 } from '../version1/IncidentsHttpProxyClientV1';

export class IncidentsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-incidents', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-incidents', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-incidents', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-incidents', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-incidents', 'client', 'lambda', 'default', '1.0');
	public static HttpProxyClientV1Descriptor = new Descriptor('iqs-services-incidents', 'client', 'http-proxy', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(IncidentsClientFactory.NullClientV1Descriptor, IncidentsNullClientV1);
		this.registerAsType(IncidentsClientFactory.DirectClientV1Descriptor, IncidentsDirectClientV1);
		this.registerAsType(IncidentsClientFactory.HttpClientV1Descriptor, IncidentsHttpClientV1);
		this.registerAsType(IncidentsClientFactory.LambdaClientV1Descriptor, IncidentsLambdaClientV1);
		this.registerAsType(IncidentsClientFactory.HttpProxyClientV1Descriptor, IncidentsHttpProxyClientV1);
	}
	
}
