import { memo } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CategoryAllProducts from 'pages/AllProducts'
import Category from 'pages/Category'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import Product from 'pages/Product'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:category" element={<Category />} />
        <Route path="/all-products" element={<CategoryAllProducts />} />
        <Route path="/:category/:product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default memo(Router)
