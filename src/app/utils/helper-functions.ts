import type NullToUndefined from '~/types/global/NullToUndefined';

export function generateSlug(source: string) {
	const slug = source
		.toLowerCase()
		.replace(/[^a-z0-9 -]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-');

	return slug;
}

/**
 * A method to remove properties from an object.
 * @param value The object's value
 * @param keys An array with the properties to be removed.
 * @returns The object without the provided property names.
 */
export function excludeFields<T, Key extends keyof T>(value: T, ...keys: Key[]): Omit<T, Key> {
	if (!value) return value;

	for (const key of keys) {
		delete value[key];
	}

	return value;
}

/** Removes fields without value from an object recursively. */
export function cleanObject<T>(obj: T): NullToUndefined<T> {
	for (const field in obj) {
		if (obj[field] === undefined || obj[field] === null) {
			delete obj[field];
		}

		if (typeof obj[field] === 'object' && !(obj[field] instanceof Date)) {
			(obj[field] as unknown) = cleanObject(obj[field]);
		}
	}

	return obj as never;
}

/**
 * Checks if an element in an array satisfies a given condition.
 * @param list The array to check elements for.
 * @param predicate The condition to check.
 * @returns `true` if the condition was met. Otherwise `false`.
 */
export function contains<T>(list: T[], predicate: (x: T) => boolean) {
	for (const element of list) {
		if (predicate(element)) return true;
	}

	return false;
}

export function getDir(locale: string) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
	return (new Intl.Locale(locale) as any).textInfo.direction as 'rtl' | 'ltr';
}
