# Product detail page

- Add to cart button

  - [ ] ~~If the cart is inside the cart the button is shown as quantity and the quantity can be - modified~~
  - [ ] ~~Cart button along with the quantity button beside it~~
  - [x] Status should be synced with the cart
  - [ ] Cart is tied to user, thus there should be two mode of adding product

    - User is logged in
    - User is not logged in, we use general

  - [ ] Problem when user logged in the the car it not empty
    - An possible cart merge should happen, or certain kind of warning of losing track of the items currently inside the cart

# Cart

## design

- [] cart is fetched for the user every time when the cart is **opened**
- [] cart fetching should have loading indicator
- [] adding item, from the product will have a loading spinner indicating the backend communication
- [] adding item will **follow with a fetch**
- [] Any changes(alter quantities, remove items) to the cart will follow with a fetch, disabling any further interactions before getting the responses

## Todo

## Problem

## ~~fetchCart from the backend set the state of the UI but UI changes by interacting with the cart will be override by the fetch, thus the fetch time would be a challenge~~

- ~~Possible fetch times:~~
  - ~~when component mount~~
  - ~~when user is logged in~~
  - ~~Every time when the Cart changes are made but the backend request may not be finished yet~~

## backend have endpoints for add carItem, modifyCartItemQuantity but in the frontend end the logic is not perfectly aligned with the backend logic.

- when we add item to cart, we need to check if the cart has the item or not, if there is we modify cart item's quantity instead of adding duplicated one
- two separate API request should be made conditionally
- the validation should be made based on the results from the backend...Should this validation be made against the API request results or frontend state?
  - Against results means excessive amount of API request, adding item to cart equals to: getAllUserCartItems -> addCartItem -> getAllUserCartItems
  - Against UI means risk of UI state is out of sync with the server

### Solution

- Replacing the reducer with thunk + extra reducer.
