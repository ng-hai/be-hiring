import Router from 'next/router'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false, minimum: 0.01, easing: 'linear' })

let timer
Router.events.on('routeChangeStart', () => {
  timer = setInterval(() => {
    NProgress.inc()
  }, 100)
})
Router.events.on('routeChangeComplete', () => {
  NProgress.done()
  clearInterval(timer)
})
Router.events.on('routeChangeError', () => {
  NProgress.done()
  clearInterval(timer)
})

export default () => null
