import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/UI/Layout/Layout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProtectedRoutes } from '../components/ProtectedRoutes/ProtectedRoutes'
import Head from 'next/head'
import { Box, Divider, Typography } from '@mui/material'
import { NavBar } from '../components/UI/Layout/NavBar'
import { UserLayout } from '../components/UI/Layout/UserLayout'
import { Login } from '../components/Auth/login'
import { useDecodedJwt } from '../hooks/useDecodedJwt'

const queryClient = new QueryClient()


function MyApp({ Component, pageProps }: AppProps) {


  const decoded = useDecodedJwt();


  return (

    <QueryClientProvider client={queryClient}>

      <Head>

        <title>Amalgamate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>


      <ProtectedRoutes>


        <Box>

          <NavBar />

          <Divider />

        </Box>

        {decoded?.role === "user" ?


          <UserLayout />

          :

          decoded?.role === "admin" || "developer" ?

            <Layout>

              <Component {...pageProps} />

            </Layout> : <Login />

        }

      </ProtectedRoutes>

    </QueryClientProvider>

  )
}

export default MyApp
