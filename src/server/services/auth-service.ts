import bcrypt from 'bcrypt';
import { z } from 'zod';

import { cleanObject } from '~/app/utils/helper-functions';
import type UserDTO from '~/types/DTO/UserDTO';
import BaseError from '~/types/errors/BaseError';
import UnauthorizedError from '~/types/errors/UnauthorizedError';
import type UserCreateModel from '~/types/models/User/UserCreateModel';
import type UserVM from '~/types/VM/UserVM';
import db from '~db';
import { mapFileToVM } from './files-service';

const Credentials = z.object({
	email: z.string().email(),
	password: z.string()
});

type Credentials = z.infer<typeof Credentials>;

export async function authenticateCredentials(credentials?: Credentials) {
	const { email, password } = Credentials.parse(credentials);

	const user = await db.user.findUnique({ where: { email }, include: { avatar: true } });
	if (!user?.hashedPassword) throw new UnauthorizedError('Email or password are invalid');

	const passwordMatching = await bcrypt.compare(password, user.hashedPassword);
	if (!passwordMatching) throw new UnauthorizedError('Email or password are invalid');

	return user;
}

export async function createUser(user: UserCreateModel): Promise<UserVM> {
	const { email, password, ...userData } = user;
	const existingUser = await db.user.findUnique({ where: { email }, select: { email: true } });
	if (existingUser) throw new BaseError('User already exists', 409);

	const hashedPassword = await bcrypt.hash(password, 10);

	const newUser = await db.user.create({
		data: { ...userData, email, hashedPassword },
		include: { avatar: true }
	});

	return mapUserToVM(newUser);
}

function mapUserToVM(user: UserDTO): UserVM {
	const { id, name, email, address, avatar } = user;
	return cleanObject({ id, name, email, address, avatar: avatar ? mapFileToVM(avatar) : undefined });
}
