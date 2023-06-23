import { render } from '@redwoodjs/testing/web'

import LoginPagePage from './LoginPagePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LoginPagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoginPagePage />)
    }).not.toThrow()
  })
})
