import { fireEvent, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { SearchBar } from './SearchBar'
import { renderWithProvider } from '../../tests/test-utils'

describe('SearchBar Component', () => {
  it('should render the input field with the correct placeholder and handle text input', async () => {
    const setValue = vi.fn()
    const { getByPlaceholderText } = renderWithProvider(
      <SearchBar
        resultsCount={5}
        setSearch={setValue}
        placeholder='Type to search'
        search=''
      />,
    )

    const input = getByPlaceholderText('Type to search')
    expect(input).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'New search' } })

    await waitFor(() => {
      expect(setValue).toHaveBeenCalledWith('New search')
    })
  })

  it('should render the results count with correct text for multiple results', () => {
    const { getByText } = renderWithProvider(
      <SearchBar
        resultsCount={5}
        setSearch={vi.fn()}
        placeholder='Type to search'
        search=''
      />,
    )
    expect(getByText('5 results')).toBeInTheDocument()
  })

  it('should render the results count with correct text for a single result', () => {
    const { getByText } = renderWithProvider(
      <SearchBar
        resultsCount={1}
        setSearch={vi.fn()}
        placeholder='Type to search'
        search=''
      />,
    )
    expect(getByText('1 result')).toBeInTheDocument()
  })

  it('should not render the results count when resultsCount is 0', () => {
    const { queryByText } = renderWithProvider(
      <SearchBar
        resultsCount={0}
        setSearch={vi.fn()}
        placeholder='Type to search'
        search=''
      />,
    )

    expect(queryByText(/result/)).toBeNull()
  })

  it('should render the search icon', () => {
    const { getByLabelText } = renderWithProvider(
      <SearchBar
        resultsCount={5}
        setSearch={vi.fn()}
        placeholder='Type to search'
        search=''
      />,
    )

    const searchIcon = getByLabelText('icon')
    expect(searchIcon).toBeInTheDocument()
  })
})
