export const locales = ['en', 'he'] as const;

type Locale = (typeof locales)[number];

export function isLocale(value: string | null | undefined): value is Locale {
	if (!value) return false;

	return locales.includes(value);
}

export default Locale;
