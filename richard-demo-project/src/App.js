import { Button, Stack } from '@mui/material'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PersistentDrawerLeft from './components/Drawer/Drawer'
import Home from './components/Home/Home'
import Product from './components/Product/Product'

export default function App() {
  return (
    <>
      <Router>
        <PersistentDrawerLeft />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </Router>
    </>
  )
}
