import { type Pet } from '@prisma/client';

import db from '../db';

export async function getPets(): Promise<Pet[]> {
	const pets = await db.pet.findMany();
	return pets;
}
