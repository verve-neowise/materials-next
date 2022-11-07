import type { AppProps } from 'next/app'
import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Layout from '../components/layouts/Layout';
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {

  const theme = createTheme({
    type: 'light'
  })

  return (
    <NextThemesProvider defaultTheme='dark' attribute='class' value={{ dark: theme.className }}>
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  )
}
