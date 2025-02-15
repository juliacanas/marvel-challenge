import { FC } from 'react'
import { SvgIconProps } from './SvgIcon.types'

export const SvgIcon: FC<SvgIconProps> = ({
  IconComponent,
  width = 24,
  height = 24,
  fill = 'currentColor',
  viewBox = '0 0 24 24',
  ariaLabel = 'icon',
  ...rest
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={viewBox}
      width={width}
      height={height}
      fill={fill}
      aria-label={ariaLabel}
      {...rest}
    >
      <IconComponent />
    </svg>
  )
}
