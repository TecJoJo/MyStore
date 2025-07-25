# Design/Todo List

- [x] Status should be synced with the cart
- [ ] Cart is tied to user, thus there should be two mode of adding
- [x] cart is fetched for the user every time when the cart is **opened**
- [] cart fetching should have loading indicator
- [] adding item, from the product will have a loading spinner indicating the backend communication
  - [x] Add existing item to car (Increment quantity)
  - [] Add new item to cart
- [x] adding item will **follow with a fetch**
- [] Any changes(alter quantities, remove items) to the cart will follow with a fetch, disabling any further interactions before getting the responses
  - [] Before the preceding request is responded, "add" button should be disabled
- [x] Decrease item quantity to 0, item should be deleted from the cart, from both UI and DB
- [] Thunk Error state handled with UI feedback
- [] Refactor the addCartItem thunk using createAsyncThunk

# Problems

- [x] fetchCart from the backend set the state of the UI but UI changes by interacting with the cart will be override by the fetch, thus the fetch time would be a challenge

- [x] backend have endpoints for add carItem, modifyCartItemQuantity but in the frontend end the logic is not perfectly aligned with the backend logic.

  - [x] when we add item to cart, we need to check if the cart has the item or not, if there is we modify cart item's quantity instead of adding duplicated one
  - [x] two separate API request should be made conditionally
  - [x] the validation should be made based on the results from the backend...Should this validation be made against the API request results or frontend state?

    - Against results means excessive amount of API request, adding item to cart equals to: getAllUserCartItems -> addCartItem -> getAllUserCartItems
    - Against UI means risk of UI state is out of sync with the server

    **Solution:** Based on the backend, sacrificing little bit UX but bounce the accuracy
