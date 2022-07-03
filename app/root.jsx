import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'
import styles from '~/styles/global.css'

export const meta = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1'
})

export const links = () => ([
  {
    rel: 'stylesheet',
    href: styles
  }, {
    rel: 'stylesheet',
    href: 'https://cdn.simplecss.org/simple.min.css'
  }
])

const Layout = () => {
  return (
    <main>
      <header>
        <Link to="/">
          <h1>The Tools Catalog brain</h1>
        </Link>
      </header>
      <Outlet />
      <footer>
        <small>copyright Qmenta</small>
      </footer>
    </main>
  )
}

export default function App () {
  return (
    <html lang="es">
      <head>
        <title>Catalog Admin</title>
        <Meta />
        <Links/>
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
