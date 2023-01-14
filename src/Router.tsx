import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { CheckoutPage } from './pages/Checkout'
import { Home } from './pages/Home'
import { SuccessPage } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/success' element={<SuccessPage />} />
      </Route>
    </Routes>
  )
};