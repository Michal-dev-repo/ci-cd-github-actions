import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders worklogs', () => {
  render(<App />)
  const linkElement = screen.getByText(/worklogs/i)
  expect(linkElement).toBeInTheDocument()
})
