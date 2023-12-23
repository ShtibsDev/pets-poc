import { z } from 'zod';

const UserCreateModel = z.object({
	email: z.string().email(),
	password: z.string(),
	name: z.string()
});

type UserCreateModel = z.infer<typeof UserCreateModel>;

export default UserCreateModel;
