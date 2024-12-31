describe("Authentication", () => {
	it("allows a user to log in", () => {
		cy.visit("/login");
		cy.get('input[name="username"]').type("testuser");
		cy.get('input[name="password"]').type("test");
		cy.get('button[type="submit"]').click();

		// Check if login was successful by visiting dashboard
		cy.url().should("include", "/dashboard");
		cy.get("h1").contains("Welcome, testuser");
	});
	it("denies access to dashboard when not logged in", () => {
		cy.visit("/dashboard");
		cy.contains("Access Denied");
	});
});
describe("Logout Functionality", () => {
	beforeEach(() => {
		// Log in before each test
		cy.visit("/login");
		cy.get('input[name="username"]').type("testuser");
		cy.get('input[name="password"]').type("test");
		cy.get('button[type="submit"]').click();
		cy.url().should("include", "/dashboard"); // Assuming login redirects here
	});

	it("allows a user to log out", () => {
		// Click the logout button or navigate to logout page
		cy.get("button").contains("Logout").click(); // Adjust selector based on your logout button

		// Check if logout was successful by verifying redirect to login page or login page content
		cy.url().should("include", "/login");
		cy.get("h1").contains("Login Test"); // Assuming your login page has an H1 with "Login"
	});

	// it("removes session token after logout", () => {
	// 	cy.get("button")
	// 		.contains("Logout")
	// 		.click()
	// 		.then(() => {
	// 			cy.getCookies().then(cookies => {
	// 				cy.log(JSON.stringify(cookies)); // Log all cookies to see if the session token is still there
	// 				cy.getCookie("next-auth.session-token").should("not.exist");
	// 			});
	// 		});
	// });
});
