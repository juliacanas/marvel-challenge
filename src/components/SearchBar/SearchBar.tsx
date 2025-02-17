import { FC, useEffect, useState } from 'react'

import {
  Container,
  Input,
  InputContainer,
  ResultsCount,
} from './SearchBar.styles'
import { SvgIcon } from '../SvgIcon/SvgIcon'
import { SearchIcon } from '../../icons/SearchIcon'
import texts from '../../assets/texts.json'
import { SearchBarProps } from './SesrBar.types'
import { useDebounce } from '../../hooks/useDebounce'

export const SearchBar: FC<SearchBarProps> = ({
  resultsCount,
  placeholder,
  debounceTime = 0,
  setSearch,
  search,
}) => {
  const [value, setValue] = useState<string>(search)
  const debouncedSearchTerm = useDebounce(value, debounceTime)

  useEffect(() => {
    setSearch(debouncedSearchTerm)
  }, [debouncedSearchTerm, setSearch])

  useEffect(() => {
    setValue(search)
  }, [search])

  const countText = `${resultsCount} ${resultsCount && resultsCount > 1 ? texts.layout.results : texts.layout.result}`

  return (
    <Container>
      <InputContainer>
        <SvgIcon
          IconComponent={SearchIcon}
          width={12}
          height={12}
          viewBox={'0 0 12 12'}
        />
        <Input
          type='search'
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </InputContainer>

      {!!resultsCount && <ResultsCount>{countText}</ResultsCount>}
    </Container>
  )
}
