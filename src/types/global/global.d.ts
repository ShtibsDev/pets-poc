import { type FC as FCType, type ReactNode as ReactNodeType } from 'react';

declare global {
	type FC<P> = FCType<P>;
	type ReactNode = ReactNodeType;

	type RequireAtLeastOne<T> = {
		[K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>;
	}[keyof T];
}
