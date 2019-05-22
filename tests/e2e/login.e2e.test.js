describe('E2E tests', () => {
  const url = 'https://master.d2mdn3yvvbw50z.amplifyapp.com'
  beforeAll(async () => {
    await page.goto(url)
  })

  it('should be titled "NYC Data Speaks"', async () => {
    await expect(page.title()).resolves.toEqual(expect.stringContaining('NYC Data Speaks'))
  })

  test('should login successfully', () => {
   
  })
})
