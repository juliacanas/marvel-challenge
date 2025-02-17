import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 24 * 60 * 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
})

import router from './routes'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { FavoritesProvider } from './context/FavoritesProvider'

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <FavoritesProvider>
            <RouterProvider router={router} />
          </FavoritesProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
