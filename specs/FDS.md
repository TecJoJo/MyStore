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

## Todo

## Problem

- fetchCart from the backend set the state of the UI but UI changes by interacting with the cart will be override by the fetch, thus the fetch time would be a challenge
- Possible fetch times:
  - when component mount
  - when user is logged in
  - Every time when the Cart changes are made but the backend request may not be finished yet
