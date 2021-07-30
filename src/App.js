import React from "react";
// components
import Navbar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux"
import reducer from "./reducer"
import { Provider } from "react-redux"

//Redux Notes:
//store - stores data, think of state
//reducer - function used to update store
//reducer function takes two arguments: state, action
//state - old state/ state before update
//action - what happened/ what update
//return updated or old state 
//Provider - wraps app, connect, used in components

//store.getState() - we get back our state
//dispatch method - send actions to the store
//actions (objects) - MUST HAVE TYPE PROPERTY - what kind of action
//don't mutate the state - redux built on IMMUTABILITY (copy)

//initial store
const initialStore = {
  cart: cartItems,
  total: 100,
  amount: 5
}

const store = createStore(reducer, initialStore)

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;