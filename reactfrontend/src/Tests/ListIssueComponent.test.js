import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders issues', () => {
  render(<App />)
  const linkElement = screen.getByText(/issues/i)
  expect(linkElement).toBeInTheDocument()
})
