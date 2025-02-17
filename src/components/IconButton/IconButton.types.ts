import { ButtonHTMLAttributes } from 'react'
import { SvgIconProps } from '../SvgIcon/SvgIcon.types'

export interface IconButtonProps {
  svgProps: SvgIconProps
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>
}
