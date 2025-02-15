import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, milliSecondsDelay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, milliSecondsDelay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, milliSecondsDelay])

  return debouncedValue
}
