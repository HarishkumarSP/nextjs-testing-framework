import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: { label: "Username", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				// Here, you would typically check against a database or external service
				if (
					credentials?.username === "testuser" &&
					credentials?.password === "test"
				) {
					return {
						id: 1,
						name: credentials.username,
						email: "test@example.com",
					};
				} else {
					return null;
				}
			},
		}),
	],
	session: {
		strategy: "jwt",
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
