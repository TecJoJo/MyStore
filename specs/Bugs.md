# Bugs

- [] Add items in the product detail page will toggle the cart on and off
  - action toggleCart is dispatched, currently no openCart dispatch action is available
- [] Items quantity can be negative
- [] Add to cart from productDetail for existing item will increment the quantity only after re-open the cart, otherwise 405 response it returned

# Issues

## More unified way of handling the productDetail page's product interface and Cart's ICartItem Interface
