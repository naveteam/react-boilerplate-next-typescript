import { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  border: 0;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}
button, a {
  cursor: pointer;
  &:disabled{
    cursor: not-allowed;
  }
}
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
