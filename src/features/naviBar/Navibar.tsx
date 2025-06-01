import NavLink from "./components/NavLink"
import { toggleCart } from "../cart/cartSlice"
import { useAppDispatch } from "../../app/hooks"
function NaviBar() {
  const dispatch = useAppDispatch()
  return (
    <div className="flex w-8/12 justify-center mx-auto">
    <NavLink name="Home" />
    <NavLink name="About" />
    <NavLink name="Contact" />
    <h1>My Store</h1>
    <NavLink name="Cart" onClick={()=>dispatch(toggleCart())} />
    </div>
  )
}

export default NaviBar