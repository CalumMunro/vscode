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

	execPath: string;
	appRoot: string;

	userHome: string;
	userDataPath: string;

	appSettingsHome: URI;

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

	machineSettingsResource: URI;

	globalStorageHome: string;
	workspaceStorageHome: string;

	backupHome: URI;
	backupWorkspacesPath: string;

	untitledWorkspacesHome: URI;

	isExtensionDevelopment: boolean;
	disableExtensions: boolean | string[];
	builtinExtensionsPath: string;
	extensionsPath?: string;
	extensionDevelopmentLocationURI?: URI[];
	extensionTestsLocationURI?: URI;
	extensionEnabledProposedApi?: string[] | undefined;
	logExtensionHostCommunication?: boolean;

	debugExtensionHost: IExtensionHostDebugParams;

	isBuilt: boolean;

	logsPath: string;
	logLevel?: string;
	verbose: boolean;

	mainIPCHandle: string;
	sharedIPCHandle: string;

	nodeCachedDataDir?: string;

	installSourcePath: string;
	disableUpdates: boolean;

	driverHandle?: string;
	driverVerbose: boolean;

	serviceMachineIdResource?: URI;

	disableTelemetry: boolean;
}
