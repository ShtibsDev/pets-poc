export function getWithRequired<T>(value: T) {
	return { ...(value as Required<T>) };
}
