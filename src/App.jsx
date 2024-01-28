import { useEffect, useState } from 'react'
import './App.module.scss'
import { CategoryList, Header } from './components'
import { ThemeContext } from './context/ThemeContext'
import {ProductList} from './components'
import {ProductDetail} from './components'

const tg = window.Telegram.WebApp

function App() {
  // const [stage, setStage] = useState('order')
  const [category, setCategory] = useState('all')
  const [product, setProduct] = useState(null)

  useEffect(() => {
    tg.init
  }, [])

  const onCategoryClick = (categoryId) => {
    setCategory(categoryId)
  }

  const onProductClick = (product) => {
    setProduct(product)
  }

  return (
    <ThemeContext.Provider value={'light'}>
      <div style={{position: 'relative'}}>
        <Header />
        <CategoryList 
          onCategoryClick={onCategoryClick}
        />
        <ProductList onProductClick={onProductClick} categoryId={category} />
        {product && <ProductDetail product={product} onClose={() => setProduct(null)}/>}
      </div>
    </ThemeContext.Provider>
  )
}

export default App
