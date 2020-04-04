/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { createDecorator } from 'vs/platform/instantiation/common/instantiation';
import { URI } from 'vs/base/common/uri';

export const IEnvironmentService = createDecorator<IEnvironmentService>('environmentService');

export interface IDebugParams {
	port: number | null;
	break: boolean;
}

export interface IExtensionHostDebugParams extends IDebugParams {
	debugId?: string;
}

export const BACKUPS = 'Backups';

export interface IEnvironmentService {

	_serviceBrand: undefined;

	userHome: string;

	// user roaming data
	userRoamingDataHome: URI;
	settingsResource: URI;
	keybindingsResource: URI;
	keyboardLayoutResource: URI;
	argvResource: URI;
	snippetsHome: URI;

	// sync resources
	userDataSyncLogResource: URI;
	userDataSyncHome: URI;
	sync: 'on' | 'off';

	backupHome: URI;

	untitledWorkspacesHome: URI;

	isExtensionDevelopment: boolean;
	disableExtensions: boolean | string[];
	extensionDevelopmentLocationURI?: URI[];
	extensionTestsLocationURI?: URI;
	extensionEnabledProposedApi?: string[];
	logExtensionHostCommunication?: boolean;

	debugExtensionHost: IExtensionHostDebugParams;

	isBuilt: boolean;

	logsPath: string;
	logLevel?: string;
	verbose: boolean;

	serviceMachineIdResource?: URI;

	disableTelemetry: boolean;
}
