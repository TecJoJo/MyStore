import "./App.css"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"

import NaviBar from "./features/naviBar/Navibar"
import Cart from "./features/cart/Cart"
import Login from "./features/authentication/Login"

import Hero from "./components/landingPage/Hero"

import { useAppSelector } from "./app/hooks"

const DummyAdminDashBoard = () => (
  <div>This is dashboard and should be visibale only to authenticated user</div>
)

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isUserAuthenticated = useAppSelector(
    state => state.authentication.loginState,
  )
  console.log("isUserAuthenticated", isUserAuthenticated)
  if (isUserAuthenticated === "succeeded") {
    return children
  }
  return <Navigate to={"/"} replace />
}

export const App = () => (
  <Router>
    <NaviBar />
    <Cart />
    <Routes>
      <Route path="/" element={<Hero />}></Route>
      <Route path="/login" element={<Login />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <Routes>
              <Route
                path="/adminDashboard"
                element={<DummyAdminDashBoard />}
              ></Route>
            </Routes>
          </ProtectedRoute>
        }
      />
    </Routes>
  </Router>
)
