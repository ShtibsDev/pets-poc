'use client';

import { SessionProvider } from 'next-auth/react';

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
