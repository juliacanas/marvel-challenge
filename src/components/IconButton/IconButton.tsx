import { FC } from 'react'
import { IconButtonProps } from './IconButton.types'
import { SvgIcon } from '../SvgIcon/SvgIcon'
import { HTMLButtonStyled } from './IconButton.styles'

export const IconButton: FC<IconButtonProps> = ({ buttonProps, svgProps }) => {
  return (
    <HTMLButtonStyled {...buttonProps}>
      <SvgIcon {...svgProps} />
    </HTMLButtonStyled>
  )
}
