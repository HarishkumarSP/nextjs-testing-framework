import { test, expect } from "@playwright/test";

test.describe("Authentication", () => {
	test("User can log in", async ({ page }) => {
		await page.goto("/login");
		await page.fill('input[name="username"]', "testuser");
		await page.fill('input[name="password"]', "test");
		await page.click('button[type="submit"]');

		// Wait for the URL to match before asserting
		await page.waitForURL(/.*dashboard/, { timeout: 10000 });
		await expect(page).toHaveURL(/.*dashboard/);
		await expect(page.locator("h1")).toContainText("Welcome, testuser");
	});

	test("Access is denied for unauthenticated user", async ({ page }) => {
		await page.goto("/dashboard", { timeout: 10000 });
		await expect(page.locator("p")).toContainText("Access Denied");
	});
});

test.describe("Logout Functionality", () => {
	test.beforeEach(async ({ page }) => {
		// Log in before each test
		await page.goto("/login");
		await page.fill('input[name="username"]', "testuser");
		await page.fill('input[name="password"]', "test");
		await page.click('button[type="submit"]');
		await page.waitForURL(/.*dashboard/, { timeout: 10000 });
		await expect(page).toHaveURL("/dashboard"); // Assuming login redirects here
	});

	test("allows a user to log out", async ({ page }) => {
		// Click the logout button or navigate to logout page
		await page.click('button:has-text("Logout")');
		await page.waitForURL(/.*login/, { timeout: 10000 });
		// Check if logout was successful by verifying redirect to login page
		await expect(page).toHaveURL("/login");
		await expect(page.locator("h1")).toContainText("Login Test"); // Assuming your login page has an H1 with "Login"
	});
});
