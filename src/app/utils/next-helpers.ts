import { headers } from 'next/dist/client/components/headers';
import { locales } from '~/types/global/Locale';

/* istanbul ignore next */
export function getPathname(withLangParam = false) {
	const pathname = headers().get('x-next-pathname');

	if (!pathname) return '/';

	if (withLangParam) return pathname;

	const segments = pathname.split('/').filter(Boolean);

	if (locales.includes(segments[0] ?? '')) {
		return `/${segments.slice(1).join('/')}`;
	}

	return pathname;
}
