import "./App.css"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import { useEffect } from "react"

import NaviBar from "./features/naviBar/Navibar"
import Cart from "./features/cart/Cart"
import Login from "./features/authentication/Login"
import Register from "./features/authentication/Register"
import Products from "./features/products/Products"
import ProductDetail from "./features/products/ProductDetail"

import Hero from "./components/landingPage/Hero"

import { useAppSelector } from "./app/hooks"
import { useAppDispatch } from "./app/hooks"

import { setAuthenticated } from "./features/authentication/authenticationSlice"

const DummyAdminDashBoard = () => (
  <div>This is dashboard and should be visibale only to authenticated user</div>
)

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isUserAuthenticated = useAppSelector(
    state => state.authentication.loginState,
  )
  if (isUserAuthenticated === "succeeded") {
    return children
  }
  return <Navigate to={"/"} replace />
}

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken")
    if (jwtToken) {
      dispatch(setAuthenticated())
    }
  }, [dispatch])
  return (
    <Router>
      <NaviBar />
      <Cart />
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productDetail/:productId" element={<ProductDetail />} />
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute>
              <Routes>
                <Route
                  path="admin/dashboard"
                  element={<DummyAdminDashBoard />}
                ></Route>
              </Routes>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}
