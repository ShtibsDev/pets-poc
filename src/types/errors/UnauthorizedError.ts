import BaseError from './BaseError';

export default class UnauthorizedError extends BaseError {
	override readonly httpStatus: number = 401;

	constructor(message?: string, httpStatus?: number, options?: ErrorOptions) {
		super(message ?? 'User is unauthorized.', httpStatus, options);
	}
}
