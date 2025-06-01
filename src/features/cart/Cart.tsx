import { useAppSelector,useAppDispatch } from '../../app/hooks';
import {toggleCart} from "../cart/cartSlice"



function Cart() {
const dispatch = useAppDispatch()
const isCartOpen = useAppSelector((state)=>state.cart.isCartOpen)
  return (
    <div className={`w-1/4 bg-yellow-500 h-96 absolute top-0 right-0 block ${isCartOpen ? "block":"hidden"}`}>
        <button type='button' onClick={()=>dispatch(toggleCart())}>X</button>
        <p>Cart</p>
    </div>
  )
}

export default Cart