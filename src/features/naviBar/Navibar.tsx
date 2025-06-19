import { NavLink } from "react-router-dom"
import { toggleCart } from "../cart/cartSlice"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { signOut as signOutActionCreator } from "../authentication/authenticationSlice"

function NaviBar() {
  const dispatch = useAppDispatch()

  const isUserLoggedIn = !!(
    useAppSelector(state => state.authentication.loginState) === "succeeded"
  )

  const signOut = () => {
    localStorage.removeItem("jwtToken")
    dispatch(signOutActionCreator())
  }
  return (
    <div className="flex w-8/12 justify-center mx-auto">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/Products">Products</NavLink>
      <NavLink to="/adminDashboard">Admin</NavLink>

      {isUserLoggedIn ? (
        <button onClick={signOut}>
          <p>Sign Out</p>
        </button>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}

      <h1>My Store</h1>

      <button onClick={() => dispatch(toggleCart())}>Cart</button>
    </div>
  )
}

export default NaviBar
