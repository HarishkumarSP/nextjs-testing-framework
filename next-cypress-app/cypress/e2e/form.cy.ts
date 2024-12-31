describe("Form Submission Test", () => {
	it("Submits the form and verifies the response", () => {
		cy.visit("/");
		cy.get('input[name="name"]').type("John Doe");
		cy.get('input[name="email"]').type("john.doe@example.com");
		cy.get('button[type="submit"]').click();
		cy.contains("Form Submitted").should("be.visible");
		cy.contains("Hello, John Doe. Email: john.doe@example.com").should(
			"be.visible"
		);
	});
});
