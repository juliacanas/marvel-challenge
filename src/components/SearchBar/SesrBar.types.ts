export interface SearchBarProps {
  placeholder: string
  setSearch: (search: string) => void
  resultsCount?: number
  debounceTime?: number
}
