import { ThemeProvider } from 'styled-components'
import { GlobalStyled } from './styles/global'
import { DefaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyled />
    </ThemeProvider>
  )
}

export default App
