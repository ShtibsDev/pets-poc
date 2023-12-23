import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import { createUser } from '~/server/services/auth-service';
import UserCreateModel from '~/types/models/User/UserCreateModel';

export const usersRouter = createTRPCRouter({
	create: publicProcedure.input(UserCreateModel).mutation(async ({ input }) => {
		return await createUser(input);
	})
});
