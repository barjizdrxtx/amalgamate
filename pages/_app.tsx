import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/UI/Layout/Layout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProtectedRoutes } from '../components/ProtectedRoutes/ProtectedRoutes'

const queryClient = new QueryClient()


function MyApp({ Component, pageProps }: AppProps) {


  return (

    <QueryClientProvider client={queryClient}>

      <ProtectedRoutes>

        <Layout>

          <Component {...pageProps} />

        </Layout>

      </ProtectedRoutes>

    </QueryClientProvider>

  )
}

export default MyApp
