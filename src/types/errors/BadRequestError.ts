import BaseError from './BaseError';

export default class BadRequestError extends BaseError {
	override readonly httpStatus: number = 400;

	constructor(message?: string, httpStatus?: number, options?: ErrorOptions) {
		super(message ?? `$Request is invalid`, httpStatus, options);
	}
}
