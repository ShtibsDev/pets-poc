export default class BaseError extends Error {
	readonly httpStatus: number = 500;

	constructor(message?: string, httpStatus?: number, options?: ErrorOptions) {
		super(message, options);
		if (httpStatus) this.httpStatus = httpStatus;
	}
}
