import type { FC, ReactNode } from 'react';

type Provider<T> = FC<{ children: ReactNode; value: T }>;

export default Provider;
