import { type PrismaClient } from '@prisma/client';
import { mockDeep, mockReset, type DeepMockProxy } from 'jest-mock-extended';

import db from './db';

jest.mock('./db', () => ({
	__esModule: true,
	default: mockDeep<PrismaClient>()
}));

beforeEach(() => {
	mockReset(dbMock);
});

const dbMock = db as unknown as DeepMockProxy<PrismaClient>;

export default dbMock;
