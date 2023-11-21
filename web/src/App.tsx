import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routes';
import { defaultTheme } from './styles/themes/default';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
