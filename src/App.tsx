import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"
import NaviBar from "./features/naviBar/Navibar"
import Cart from "./features/cart/Cart"
export const App = () => (
  <>
    <NaviBar/>
    <div className="h-96 bg-blue-200">This is a place holder for the landing page</div>

    {/* widgets */}
    <Cart/>
  </>
)
