import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/UI/Layout/Layout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProtectedRoutes } from '../components/ProtectedRoutes/ProtectedRoutes'
import Head from 'next/head'

const queryClient = new QueryClient()


function MyApp({ Component, pageProps }: AppProps) {


  return (

    <QueryClientProvider client={queryClient}>

      <Head>
        <title>My page title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>


      <ProtectedRoutes>

        <Layout>

          <Component {...pageProps} />

        </Layout>

      </ProtectedRoutes>

    </QueryClientProvider>

  )
}

export default MyApp
