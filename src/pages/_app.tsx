import React, {StrictMode} from 'react';
import type { AppProps } from 'next/app'
import { PersistGate } from 'redux-persist/integration/react';
import { Provider} from 'react-redux'

// import '../styles/globals.css'
import { store, persistor} from '../redux'
import { ErrorBoundary } from '../components'

export default function App({ Component, pageProps }: AppProps) {
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
