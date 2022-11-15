import React, {ReactElement, ReactNode, StrictMode} from 'react';
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider} from 'react-redux'

import '../../styles/global.css'
import { store, persistor} from '../redux'
import { ErrorBoundary } from '../components'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ErrorBoundary>
            <Component {...pageProps} />
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </StrictMode>
  )
}
