# Folder structure overview inside the products

### What should be included

As planing the project, I have vision of the products list page would look like. It shall contain a filter, a showcase list, a search bar and even single product

The idea behind this design is that, the interactions with filter and search bar suppose to affect the products list so it would be wise to put products and any possible filter/search state together. The reducer here is enough then to handle all the state update

### Single Product

should single product also be included here in this slice?

#### Inspiration

https://github.com/reduxjs/redux-essentials-example-app/tree/79f74bf20b36b511c615e69840807eeb5ffc0962/src/features/posts

With having a look into the Redux official tutorial project and it helps me to have a clearer vision on how to design this slice

#### solution

Since the products state should be accessible anywhere inside the project. I don't think it is necessary to put the single product component inside this slice. But with a existing design pattern to follow, I decided to put single product also into this slice.

### Folder structure

### Folder structure

```
products/
├── components/
│   ├── SingleProduct.tsx
│   ├── Filter.tsx
│   └── SearchBar.tsx
├── ProductsSlice.ts
└── ProductsList.tsx
```
