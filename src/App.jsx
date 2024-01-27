import { useEffect, useState } from 'react'
import './App.module.scss'
import { CategoryList, Header } from './components'
import { ThemeContext } from './context/ThemeContext'

const tg = window.Telegram.WebApp

function App() {
  // const [stage, setStage] = useState('order')

  useEffect(() => {
    tg.init()
  }, [])

  return (
    <ThemeContext.Provider value={'light'}>
      <div>
        <Header />
        <CategoryList 
        
        />
        {tg?.platform}
      </div>
    </ThemeContext.Provider>
  )
}

export default App
