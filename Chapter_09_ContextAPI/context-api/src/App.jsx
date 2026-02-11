import './App.css'
import { ThemeContextProvider } from './store/ThemeContextProvider'
import { Header } from './components/Header'
import { Button } from './components/Button'

function App() {
  
  return (
    <>
      <ThemeContextProvider>
        <Header/>
        <Button/>
      </ThemeContextProvider>
    </>
  )
}

export default App
