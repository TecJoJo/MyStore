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
      <NavLink to="/" test-id="navibar-home">
        Home
      </NavLink>
      <NavLink to="/about" test-id="navibar-about">
        About
      </NavLink>
      <NavLink to="/contact" test-id="navibar-contact">
        Contact
      </NavLink>
      <NavLink to="/Products" test-id="navibar-products">
        Products
      </NavLink>
      <NavLink to="/adminDashboard" test-id="navibar-admin">
        Admin
      </NavLink>

      {isUserLoggedIn ? (
        <button onClick={signOut} test-id="navibar-signout">
          <p>Sign Out</p>
        </button>
      ) : (
        <NavLink to="/login" test-id="navibar-login">
          Login
        </NavLink>
      )}

      <h1>My Store</h1>

      <button onClick={() => dispatch(toggleCart())} test-id="navibar-cart">
        Cart
      </button>
    </div>
  )
}

export default NaviBar
