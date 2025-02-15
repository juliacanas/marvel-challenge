import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { Container, CountText, FavCounter } from './TopBar.styles'
import marvelLogo from '../../assets/logo.svg'
import { SelectedIcon } from '../../assets/SelectedIcon'
import { SvgIcon } from '../../components/SvgIcon/SvgIcon'
import texts from '../../assets/texts.json'

export const TopBar: FC = () => {
  return (
    <Container>
      <NavLink to='/'>
        <img src={marvelLogo} alt={texts.common.marvelLogo} />
      </NavLink>

      <FavCounter to='/favorites'>
        <SvgIcon IconComponent={SelectedIcon} />
        <CountText>0</CountText>
      </FavCounter>
    </Container>
  )
}
