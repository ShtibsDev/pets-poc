import { NextResponse, type NextRequest } from 'next/server';

import { createUser } from '~/server/services/auth-service';
import UserCreateModel from '~/types/models/User/UserCreateModel';

export async function POST(request: NextRequest): Promise<NextResponse> {
	const payload = await request.json();

	const user = UserCreateModel.safeParse(payload);

	if (!user.success) {
		return NextResponse.json(user.error, { status: 400 });
	}

	const newUser = await createUser(user.data);
	return NextResponse.json(newUser, { status: 201 });
}
