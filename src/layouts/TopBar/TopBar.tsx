import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { Container, CountText, FavCounter } from './TopBar.styles'
import marvelLogo from '../../assets/logo.svg'
import { SelectedIcon } from '../../icons/SelectedIcon'
import texts from '../../assets/texts.json'
import { useFavorites } from '../../context/useFavorites'
import { CHARACTERS, FAVORITES } from '../../constants'
import { IconButton } from '../../components/IconButton/IconButton'

export const TopBar: FC = () => {
  const { setListMode, favorites } = useFavorites()
  return (
    <Container>
      <NavLink to='/'>
        <img
          src={marvelLogo}
          alt={texts.common.marvelLogo}
          onClick={() => setListMode(CHARACTERS)}
        />
      </NavLink>

      <FavCounter>
        <IconButton
          buttonProps={{ onClick: () => setListMode(FAVORITES) }}
          svgProps={{
            IconComponent: SelectedIcon,
            width: 24,
            height: 24,
            viewBox: '0 0 24 22',
          }}
        />
        <CountText>{favorites.length}</CountText>
      </FavCounter>
    </Container>
  )
}
