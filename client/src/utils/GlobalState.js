//createContext will be used to instantiate a new Context object. 
//The more meaningful term we can use here is that we're using it to create the container 
//to hold our global state data and functionality so we can provide it throughout our app!
// useContext is another React Hook that will allow us to use the state created from the createContext function.
import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

// create an object
const StoreContext = createContext();
const { Provider } = StoreContext; // We are getting the provider here because, Every Context  comes with a provider and a consumer
//The Provider is a special type of React component that we wrap our application in so it can make the state data that's passed into 
//it as a prop available to all other components

const StoreProvider = ({ value = [], ...props }) => { // without the ...props nothing will work
  const [state, dispatch] = useProductReducer({
    products: [],
    categories: [],
    currentCategory: '',
  });
  // use this to confirm it works!
  console.log(state);
  // this provider will have all the data that is in the store, and pass it to the child elements 
  return <Provider value={[state, dispatch]} {...props} />; // store the data on the StoreContext object, using the provider
};


const useStoreContext = () => {
  return useContext(StoreContext); // here we are going to use useContext hook, that has the storeContext in it or has the data 
};


export { StoreProvider, useStoreContext };