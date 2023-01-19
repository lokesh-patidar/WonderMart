## Base url:-  `https://rich-red-indri-tie.cyclic.app`
# Product end point:-
  - Add product:- `baseurl` + `/products/add`
  - Update product:- `baseurl` + `/products/update/:id`
  - Delete product:- `baseurl` + `/products/delete/:id`
  - Get products:-  `baseurl` + `/products`
  - Get products by a range of price:- `baseurl` + `/products?price_low=300&&price_high=700`
  - Get products by any query:- `baseurl` + `/products/q?brand=Milky Mist`
  - Get sorted products in descending order:-  `baseurl` + `products/q?sortBy=desc`
  - Get sorted products in ascending order:-  `baseurl` + `products/q?sortBy=asc`


# User endpoints:-
  - Sign Up for admin:- `baseurl` + `/users/admin/signup`
  - Sign Up for user:- `baseurl` + `/users/user/signup`
  - Update user:- `baseurl` + `/users/update/:id`
  - Update user:- `baseurl` + `/users/delete/:id`
  - Get users (all users and admin):- `base url` + `/users/`

# Cart endpoint:- 
  - Get cart items: `baseurl` + `/cart/cartItems`
  - Add cart items: `baseurl` + `/cart/addcartItem/:id`
  - Delete cart item: `baseurl` + `/cart/delete/:id`