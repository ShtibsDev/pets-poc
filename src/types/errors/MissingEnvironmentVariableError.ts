export default class MissingEnvironmentVariableError extends Error {
	constructor(envVariableName: keyof NodeJS.ProcessEnv, options?: ErrorOptions) {
		super(`Missing value for variable '${envVariableName}' in your .env file.`, options);
	}
}
