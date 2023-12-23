import { getServerSession } from 'next-auth';

export default async function Home() {
	const session = await getServerSession();

	return <main className="">Hello {session?.user.name ?? 'Guest'}</main>;
}
