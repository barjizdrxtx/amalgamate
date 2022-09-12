import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/UI/Layout/Layout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import featuresSlice from '../redux/featuresSlice'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ProtectedRoutes } from '../components/ProtectedRoutes/ProtectedRoutes'

const queryClient = new QueryClient()

const store = configureStore({

  reducer: {

    features: featuresSlice,
  }
})


function MyApp({ Component, pageProps }: AppProps) {


  return (
    <QueryClientProvider client={queryClient}>


      <Provider store={store}>


        <ProtectedRoutes>

          <Layout>

            <Component {...pageProps} />

          </Layout>

        </ProtectedRoutes>





      </Provider>


    </QueryClientProvider>
  )

}

export default MyApp
