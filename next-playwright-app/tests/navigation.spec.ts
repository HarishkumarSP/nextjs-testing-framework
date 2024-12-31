import test, { expect } from "@playwright/test";

test.describe("Navigation", () => {
	test("should navigate to the about page", async ({ page }) => {
		await page.goto("/");
		await page.click('a[href*="about"]');
		await expect(page).toHaveURL(/.*about/);
		await expect(page.locator("h1")).toContainText("About");
	});
	test("should navigate to the login page", async ({ page }) => {
		await page.goto("/");
		await page.click('a[href*="login"]');
		await expect(page).toHaveURL(/.*login/);
		await expect(page.locator("h1")).toContainText("Login Test");
	});
});
