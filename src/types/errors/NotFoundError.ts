import BaseError from './BaseError';

export default class NotFoundError extends BaseError {
	override readonly httpStatus: number = 404;

	constructor(message?: string, httpStatus?: number, options?: ErrorOptions) {
		super(message, httpStatus ?? 404, options);
	}
}
