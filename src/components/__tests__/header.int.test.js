import React from 'react'
import { render, cleanup } from 'react-testing-library'

import Header from '../header'
afterEach(cleanup)

describe('Header component', () => {
  test('should contain the page title', () => {
    const { container } = render(<Header />)
    const brand = container.querySelector('.navbar-brand')
    expect(brand).not.toBeNull()
    expect(brand.textContent).toBe('Neighborhood Data')
  })
})
