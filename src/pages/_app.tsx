import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Head>
        <title>War Time Fakes</title>
        <meta name="next-head-count" content="3" />
        <meta name="description" content="War Time Fakes" />
        <meta
          property="og:image"
          content="https://inthepocket.tech/api/og-image?name=Next.js&stage=adopt"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Component {...pageProps} /></>
}
