import { test, expect } from "@playwright/test";

test("Submits the form and verifies the response", async ({ page }) => {
	await page.goto("/"); // Change to your Next.js app's URL
	await page.fill('input[name="name"]', "John Doe");
	await page.fill('input[name="email"]', "john.doe@example.com");
	await page.click('button[type="submit"]');
	await expect(page.locator("text=Form Submitted")).toBeVisible();
	await expect(
		page.locator("text=Hello, John Doe. Email: john.doe@example.com")
	).toBeVisible();
});
