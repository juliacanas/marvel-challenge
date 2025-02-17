import { describe, it, expect, vi } from 'vitest'
import { IconButton } from './IconButton'
import { fireEvent, render } from '@testing-library/react'
import { SelectedIcon } from '../../assets/SelectedIcon'

describe('IconButton Component', () => {
  const mockButtonProps = {
    onClick: vi.fn(),
    'aria-label': 'icon-button',
  }

  const mockSvgProps = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    IconComponent: SelectedIcon,
  }

  it('should render the button with correct aria-label', () => {
    const { getByLabelText } = render(
      <IconButton buttonProps={mockButtonProps} svgProps={mockSvgProps} />,
    )
    expect(getByLabelText('icon-button')).toBeInTheDocument()
  })

  it('should render the SVG icon with correct props', () => {
    const { getByRole } = render(
      <IconButton buttonProps={mockButtonProps} svgProps={mockSvgProps} />,
    )
    const svg = getByRole('img')
    expect(svg).toHaveAttribute('width', '24')
    expect(svg).toHaveAttribute('height', '24')
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
  })

  it('should call onClick function when button is clicked', () => {
    const { getByLabelText } = render(
      <IconButton buttonProps={mockButtonProps} svgProps={mockSvgProps} />,
    )
    const button = getByLabelText('icon-button')
    fireEvent.click(button)
    expect(mockButtonProps.onClick).toHaveBeenCalledTimes(1)
  })
})
