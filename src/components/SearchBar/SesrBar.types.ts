export interface SearchBarProps {
  value: string
  placeholder: string
  setValue: (value: string) => void
  resultsCount?: number
}
