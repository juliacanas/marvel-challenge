import { FC, useEffect, useState } from 'react'
import { GridItems, Title, Container } from './SearchList.styles'
import { SearchListProps } from './SearchList.types'
import { SearchBar } from '../SearchBar/SearchBar'
import { useDebounce } from '../../hooks/useDebounce'

export const SearchList: FC<SearchListProps> = ({
  title,
  listItems,
  placeholder,
  debounceTime = 0,
}) => {
  const [value, setValue] = useState<string>('')
  const debouncedSearchTerm = useDebounce(value, debounceTime)

  useEffect(() => {
    // API call
    console.log('Search triggered with term:', debouncedSearchTerm)
  }, [debouncedSearchTerm])

  return (
    <Container>
      <Title>{title}</Title>
      <SearchBar placeholder={placeholder} value={value} setValue={setValue} />
      {listItems && (
        <GridItems>
          {listItems.map((idx) => (
            <p key={idx}>{idx}</p>
          ))}
        </GridItems>
      )}
    </Container>
  )
}
