import { test, expect } from "@playwright/test";


test.describe("Automate Naukri Job Hunting", () => {
  test.beforeEach(async ({ page }) => {
    // Go to Naukri.com and verify the URL
    await page.goto(`${process.env.BASE_URL}`);
    await expect(page).toHaveURL(/naukri/);
    await page.keyboard.press('Escape');
  });

  test("Tap on Job Seeker Login", async ({ page }) => {
    // Click on the Job Seeker Login button and verify the drawer appears

    await page.locator("#login_Layer").click();
    const drawer = page.locator(".drawer-wrapper");
    await expect(drawer).toBeVisible();

    const userName = page.getByPlaceholder(
      "Enter your active Email ID / Username",
    );
    await userName.fill(`${process.env.NAUKRI_EMAIL}`);
    const passwordField = page.getByPlaceholder("Enter your password");
    await passwordField.fill(`${process.env.NAUKRI_PASSWORD}`);
    const loginBtn = page.getByRole("button", { name: "Login", exact: true });
    await expect(loginBtn).toBeVisible();
    await loginBtn.click();

    await expect(page).toHaveURL(/homepage/);

    const searchOpen = page.locator(".nI-gNb-sb__main");
    await searchOpen.click();
    await expect(searchOpen).toBeVisible();
    const dropDownMenu = page.locator("#jobType");
    await dropDownMenu.click();

    await page.locator('li[title="Job"]').click();

    const keywordBox = page.getByPlaceholder(
      "Enter keyword / designation / companies",
    );

    await keywordBox.fill(
      `QA automation, SDET, QA Engineer, QA testing, QA Manual Test Engineer, Quality assurance And Software Test Engineer,`,
    );
    const searchBtn = page.locator(".nI-gNb-sb__icon-wrapper");
    await searchBtn.click();
    await expect(page).toHaveURL(/qa-automation-sdet/);

    const sortBy = page.locator('#filter-sort');
    await sortBy.click();
    await page.locator('li[title="Date"]').click();

  });
});
