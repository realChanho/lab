import type { AppProps } from 'next/app'
import React from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { GlobalStyles } from '../utils/GlobalStyles'

const queryClient = new QueryClient()
queryClient.setDefaultOptions({
  queries: {
    staleTime: Infinity,
  },
})

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {GlobalStyles}
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
          <ReactQueryDevtools iinitialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default App
