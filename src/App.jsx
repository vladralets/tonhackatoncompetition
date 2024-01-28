import { useEffect, useState } from 'react'
import style from './App.module.scss'
import { CategoryList, Header } from './components'
import { ThemeContext } from './context/ThemeContext'
import {ProductList} from './components'
import {ProductDetail} from './components'
import {Cart} from './components'
import { useCartStore } from './utils/cartStore'

const tg = window.Telegram.WebApp

function App() {
  const [stage, setStage] = useState('list') // list, cart, order
  const [category, setCategory] = useState('all')
  const [product, setProduct] = useState(null)

  const { cart } = useCartStore()

  useEffect(() => {
    console.log('tg', tg)
    tg.init
    tg.expand()
  }, [])

  const onCategoryClick = (categoryId) => {
    setCategory(categoryId)
  }

  const onProductClick = (product) => {
    setProduct(product)
  }

  return (
    <ThemeContext.Provider value={'light'}>
      <div style={{position: 'relative', paddingBottom: '40px'}}>
        <Header />
        {stage === 'list' && (<><CategoryList 
          onCategoryClick={onCategoryClick}
        />
        <ProductList onProductClick={onProductClick} categoryId={category} />
        {product && <ProductDetail product={product} onClose={() => setProduct(null)}/>}
        {cart.products.length > 0 && <div className={style.cart}><button className={style.cart__button} onClick={() => setStage('cart')}>Košík</button></div>}</>)}
          {stage === 'cart' && <Cart onClose={() => setStage('list')} />}
      </div>
    </ThemeContext.Provider>
  )
}

export default App
