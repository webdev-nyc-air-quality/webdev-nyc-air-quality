describe('E2E tests', () => {
  const url = 'https://master.d2mdn3yvvbw50z.amplifyapp.com'
  const testUsername = process.env.TEST_USERNAME
  const testPassword = process.env.TEST_PASSWORD
  const bigTimeout = 60000
  const smallTimeout = 500
  jest.setTimeout(bigTimeout)

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
    const responsiveDropdownToggleSelector = '.navbar-toggler'
    const dropdownToggleSelector = 'a.dropdown-toggle.nav-link'
    const dropdownLoginSelector = '#dropdown-login-link'
    const usernameSelector = '#username-field'
    const passwordSelector = '#password-field'
    const loginSelector = '#login-link'
    const mainHeadingSelector = '#main-heading'
    const profileUsernameSelector = '#profile-username'
    const expectedMainHeadingText = 'Profile'
    const expectedProfileUsername = `Username: ${testUsername}`

    if (process.env.TEST_PLATFORM === 'mobile') {
      await page.waitForSelector(responsiveDropdownToggleSelector)
      await page.click(responsiveDropdownToggleSelector)
      await page.waitFor(smallTimeout);
    }

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

    await page.waitFor(smallTimeout);
    await page.waitForSelector(mainHeadingSelector)
    let actualText = await page.$eval(mainHeadingSelector, el => el.innerText)
    await expect(actualText).toBe(expectedMainHeadingText)

    await page.waitForSelector(profileUsernameSelector)
    actualText = await page.$eval(profileUsernameSelector, el => el.innerText)
    await expect(actualText).toBe(expectedProfileUsername)
  })
})
