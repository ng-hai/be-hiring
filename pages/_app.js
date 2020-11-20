import App from 'next/app'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import '../styles/tailwind.css'

const Header = dynamic(() => import('../components/header'))
const Footer = dynamic(() => import('../components/footer'))
const Nprogress = dynamic(() => import('../components/nprogress'))

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <main className="flex flex-col h-screen font-sans antialiased tracking-wide text-dark-blue">
        <Head>
          <title>beHiring - 👋🏼 Join us today</title>
        </Head>
        <Header />
        <div className="flex-1 pt-16 md:pt-20">
          <Component {...pageProps} />
        </div>
        <Footer />
        <Nprogress />
      </main>
    )
  }
}
