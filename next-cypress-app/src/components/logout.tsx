"use client";
import { signOut } from "next-auth/react";

export function LogoutButton() {
	return (
		<button
			type='button'
			className='bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
			onClick={() => signOut({ callbackUrl: "/login" })}
		>
			Logout
		</button>
	);
}
