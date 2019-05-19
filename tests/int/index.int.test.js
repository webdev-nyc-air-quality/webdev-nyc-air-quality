import React from 'react'
import { render, cleanup } from 'react-testing-library'

import IndexPage from '../../src/pages/index'
import '../../src/aws-exports'

jest.mock('../../src/aws-exports')
afterEach(cleanup)

describe('IndexPage component', () => {
  const props = {
    data: {
      site: {
        siteMetadata: {
          title: "NYC Data Speaks"
        }
      }
    }
  }
  test('should change active tab on tab click', () => {
    const { container } = render(
      <IndexPage {...props} />
    )
    const tabs = container.querySelectorAll('.nav-tabs .nav-item')
    const tabPanes = container.querySelectorAll('.tab-pane')
    expect(tabs).toHaveLength(3)
    tabs.forEach((tab, index) => {
      tab.click()
      expect(tabPanes[index].classList.contains('active')).toBeTruthy()
    })
  })

  test('should expand dataset list item on button click', () => {
    const { container } = render(
      <IndexPage {...props} />
    )
    const buttons = container.querySelectorAll('.accordion button')
    const contents = container.querySelectorAll('.accordion .collapse')
    expect(buttons).toHaveLength(4)
    buttons.forEach((button, i) => {
      // Timeout is needed because the accordion has a change transition
      setTimeout(1000, () => {
        button.click()
        contents.forEach((content, j) => {
          if (i === j) 
            expect(content.classList.contains('show')).toBeTruthy()
          else
            expect(content.classList.contains('show')).toBeFalsy()
        })
        
      })
    })
  })
})
