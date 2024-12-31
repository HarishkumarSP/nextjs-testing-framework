describe("Navigation", () => {
	it("should navigate to the about page", () => {
		cy.visit("/");
		cy.get('a[href*="about"]').click();
		cy.url().should("include", "/about");
		cy.get("h1").contains("About");
	});
	it("should navigate to the login page", () => {
		cy.visit("/");
		cy.get('a[href*="login"]').click();
		cy.url().should("include", "/login");
		cy.get("h1").contains("Login Test");
	});
});
