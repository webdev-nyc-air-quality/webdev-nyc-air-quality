describe('E2E tests', () => {
  const url = 'https://master.d2mdn3yvvbw50z.amplifyapp.com'
  const testUsername = process.env.TEST_USERNAME
  const testPassword = process.env.TEST_PASSWORD

  beforeAll(async () => {
    await page.goto(url)
  })

  it('should receive test username/password from env', () => {
    expect(testUsername).toBeTruthy()
    expect(testPassword).toBeTruthy()
  })

  it('should be titled "NYC Data Speaks"', async () => {
    await expect(page.title()).resolves.toContain('NYC Data Speaks')
  })

  test('should login successfully', async () => {
    const dropdownToggleSelector = 'a.dropdown-toggle.nav-link'
    const dropdownLoginSelector = '#dropdown-login-link'
    const usernameSelector = '#username-field'
    const passwordSelector = '#password-field'
    const loginSelector = '#login-link'
    const greetingSelector = '#greeting'
    const expectedText = 'You are now logged in!'

    await page.waitForSelector(dropdownToggleSelector)
    await page.click(dropdownToggleSelector)

    await page.waitForSelector(dropdownLoginSelector)
    const [response] = await Promise.all([
      page.waitForNavigation(),
      page.click(dropdownLoginSelector)
    ]);

    await page.waitForSelector(usernameSelector)
    await page.type(usernameSelector, testUsername)

    await page.waitForSelector(passwordSelector)
    await page.type(passwordSelector, testPassword)

    await page.waitForSelector(loginSelector)
    await Promise.all([
      page.waitForNavigation(),
      page.click(loginSelector)
    ]);

    await page.waitForSelector(greetingSelector)
    const actualText = await page.$eval(greetingSelector, el => el.innerText)
    await expect(actualText).toBe(expectedText)
  })
})
