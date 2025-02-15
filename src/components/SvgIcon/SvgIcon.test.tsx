import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest'

import { SvgIcon } from './SvgIcon'
import { renderWithProvider } from '../../tests/test-utils'

const TestIcon = () => <path d='M12 2L2 22h20L12 2z' />

describe('SvgIcon', () => {
  it('should render the SVG icon with default props', () => {
    const { getByLabelText } = renderWithProvider(
      <SvgIcon IconComponent={TestIcon} />,
    )
    const svg = getByLabelText('icon')

    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('width', '24')
    expect(svg).toHaveAttribute('height', '24')
    expect(svg).toHaveAttribute('fill', 'currentColor')
  })

  it('should apply custom width and height', () => {
    const { getByLabelText } = renderWithProvider(
      <SvgIcon IconComponent={TestIcon} width={40} height={40} />,
    )
    const svg = getByLabelText('icon')
    expect(svg).toHaveAttribute('width', '40')
    expect(svg).toHaveAttribute('height', '40')
  })

  it('should pass extra props to the svg element', () => {
    const { getByLabelText } = renderWithProvider(
      <SvgIcon IconComponent={TestIcon} data-testid='custom-svg' />,
    )
    const svg = getByLabelText('icon')
    expect(svg).toHaveAttribute('data-testid', 'custom-svg')
  })
})
