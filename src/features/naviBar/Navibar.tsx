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
      <NavLink to="/" data-cy="navibar-home">
        Home
      </NavLink>
      <NavLink to="/about" data-cy="navibar-about">
        About
      </NavLink>
      <NavLink to="/contact" data-cy="navibar-contact">
        Contact
      </NavLink>
      <NavLink to="/Products" data-cy="navibar-products">
        Products
      </NavLink>
      <NavLink to="/adminDashboard" data-cy="navibar-admin">
        Admin
      </NavLink>

      {isUserLoggedIn ? (
        <button onClick={signOut} data-cy="navibar-signout">
          <p>Sign Out</p>
        </button>
      ) : (
        <NavLink to="/login" data-cy="navibar-login">
          Login
        </NavLink>
      )}

      <h1>My Store</h1>

      <button onClick={() => dispatch(toggleCart())} data-cy="navibar-cart">
        Cart
      </button>
    </div>
  )
}

export default NaviBar
