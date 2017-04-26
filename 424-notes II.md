<<<<<<< HEAD
starting 5:43pm

## Cart
In front end store, we can keep track of the cart in the redux store. if there is a cart, it updates it. if there isn't one, we create a cart.

## Route for Cart
Make 'Add to Cart' a put request, which subscribes to state. 
Make a cart icon appear, make a number appear on it with hover. 
Opacity of 1. On hover, give it a display property. 

## main.jsx looks great
Ian -  consider making it 2 files because it's large, make oauth separate?


## Oauth
Perhaps separate into action creators, reducers, etc.

## book.jsx & books.jsx
Return new state at bottom of reducer function

## faker
Generate fake data

## index.jsx
Usually just import/export stuff

## book.jsx
You can also use toastr (a way of popping up messages for user) instead of console.error. it's simple to setup.  

## prefer for /cart on front end and /orders on back end 

## cart.js
put normally takes an :id
add middleware between route and (req, res) that checks to see if currently logged in user has access to cart
write a function that checks user ID and makes sure order belongs to user, then if it does, else will pass on the error to next

Slot isAdmin function into every route that needs authentication. Make sure to put next() on those. 

##SignUp.jsx
make all functions one function to handle changes
=======
1) Cart logic
  - upon first time adding to cart, use findOrCreate
  - cart should a) have a convenient way to quickly add to it and look at what's in it (render component view) and b) have a way to load new page, edit cart, quantity, etc
  - try using onHover to give cart a display property (this is the convenient view)
2) Main.jsx
  - move auth component onto its own page
3) auth reducer
  - review to match bones architecture (separate files/folders for reducers, action-creators, constants, etc)
4) book reducer
  - return new state at end; newState may be redundant (completely overwriting)
5) books reducer
  - initialState could be array, though JM approved of current design (planning for future expansion)
  - return new state at end
  - newstate not strictly necessary
6) seed file
  - check out faker
7) server/cart route
  - put request shoudl be to /:id
  - add middleware to confirm proper authorizations (user:cart)
  - **authorization middleware needs to call next()
8) SignUp component
  - "computed property names"
  - make all these handlers etc more dry...

General:
  - alternative to console.error: toastr (for client side errors)


>>>>>>> 9eeeca36de5575fabb260db874bdbcc3adc7abc8
