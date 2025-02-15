import { describe, expect, it } from 'vitest'

import { renderWithProvider } from '../../tests/test-utils'
import { SearchList } from './SearchList'

describe('SearchList Component', () => {
  it('should render the title and SearchBar', () => {
    const { getByText, getByPlaceholderText } = renderWithProvider(
      <SearchList
        title='Search for Items'
        listItems={['Item 1', 'Item 2', 'Item 3']}
        placeholder='Type to search'
        debounceTime={0}
      />,
    )
    const title = getByText('Search for Items')
    expect(title).toBeInTheDocument()

    const input = getByPlaceholderText('Type to search')
    expect(input).toBeInTheDocument()
  })

  it('should render the list of items correctly', () => {
    const { getByText } = renderWithProvider(
      <SearchList
        title='Search for Items'
        listItems={['Item 1', 'Item 2', 'Item 3']}
        placeholder='Type to search'
        debounceTime={0}
      />,
    )

    expect(getByText('Item 1')).toBeInTheDocument()
    expect(getByText('Item 2')).toBeInTheDocument()
    expect(getByText('Item 3')).toBeInTheDocument()
  })

  it('should not render list items if listItems is empty', () => {
    const { queryByText } = renderWithProvider(
      <SearchList
        title='Search for Items'
        listItems={[]}
        placeholder='Type to search'
        debounceTime={0}
      />,
    )
    expect(queryByText('Item 1')).toBeNull()
    expect(queryByText('Item 2')).toBeNull()
    expect(queryByText('Item 3')).toBeNull()
  })
})
