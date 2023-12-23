import type WithUUID from '~/types/global/WithUUID';

export function getWithUUID<T>(value: T) {
	return { ...(value as WithUUID<T>) };
}

/* istanbul ignore next */
export function getWithRequired<T>(value: T) {
	return { ...(value as Required<T>) };
}
