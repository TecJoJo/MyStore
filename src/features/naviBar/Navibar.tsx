import { NavLink } from "react-router-dom"
import { toggleCart } from "../cart/cartSlice"
import { useAppDispatch } from "../../app/hooks"

function NaviBar() {
  const dispatch = useAppDispatch()

  return (
    <div className="flex w-8/12 justify-center mx-auto">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Contact
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Login
      </NavLink>
      <NavLink
        to="/adminDashboard"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Admin
      </NavLink>

      <h1>My Store</h1>

      <button onClick={() => dispatch(toggleCart())}>Cart</button>
    </div>
  )
}

export default NaviBar
