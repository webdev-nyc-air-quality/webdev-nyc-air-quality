import React from 'react'
import { render, cleanup } from 'react-testing-library'

import Header from '../../src/components/header'
import { isLoggedIn } from '../../src/utils/auth'

jest.mock('../../src/utils/auth')
afterEach(cleanup)

describe('Header component', () => {
  test('should contain the page title', () => {
    const { container } = render(<Header />)
    const brand = container.querySelector('.navbar-brand')
    expect(brand).not.toBeNull()
    expect(brand.textContent).toBe('Neighborhood Data')
  })

  test('should show register, login links when logged out', () => {
    isLoggedIn.mockReturnValue(false)
    const { container } = render(<Header />)
    const items = container.querySelectorAll('.dropdown-menu .dropdown-item')
    expect(items[0].textContent).toBe('Register')
    expect(items[1].textContent).toBe('Login')
  })

  test('should show logout link when logged in', () => {
    isLoggedIn.mockReturnValue(true)
    const { container } = render(<Header />)
    const items = container.querySelectorAll('.dropdown-menu .dropdown-item')
    expect(items[0].textContent).toBe('Logout')
  })
})
