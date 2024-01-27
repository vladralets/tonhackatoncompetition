import { useEffect, useState } from 'react'
import './App.module.scss'
import { CategoryList, Header } from './components'
import { ThemeContext } from './context/ThemeContext'
import ProductList from './components/ProductList'

const tg = window.Telegram.WebApp

function App() {
  const [stage, setStage] = useState('order')
  const [category, setCategory] = useState('all')

  useEffect(() => {
    tg.init
  }, [])

  const onCategoryClick = (categoryId) => {
    console.log(categoryId)
    setCategory(categoryId)
  }

  return (
    <ThemeContext.Provider value={'light'}>
      <div>
        <Header />
        <CategoryList 
          onCategoryClick={onCategoryClick}
        />
        <ProductList categoryId={category}/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
