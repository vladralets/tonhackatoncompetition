import { useEffect, useState } from 'react'
import './App.module.scss'
import { CategoryList, Header } from './components'
import { ThemeContext } from './context/ThemeContext'

// const tg = window.Telegram.WebApp

function App() {
  // const [stage, setStage] = useState('order')

  useEffect(() => {
    // tg.init()
    // alert('Hello, world!')
  }, [])

  return (
    <ThemeContext.Provider value={'light'}>
      <div>
        <Header />
        <CategoryList 
        
        />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
