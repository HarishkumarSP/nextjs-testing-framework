import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { LogoutButton } from "@/components/logout";

export default async function Dashboard() {
	const session = await getServerSession(authOptions);
	if (!session) return <p>Access Denied</p>;
	return (
		<div className='p-5'>
			<h1 className='text-4xl'>Welcome, {session.user?.name}</h1>
			<LogoutButton />
		</div>
	);
}
