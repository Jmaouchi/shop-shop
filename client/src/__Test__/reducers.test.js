// import our actions
import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY
} from '../utils/actions';
import { reducer } from '../utils/reducers';

// create a sample of what our global state will look like
const initialState = {
  // create an empty array products, that will change letter when we call the update_product action
  products: [],
  categories: [{ name: 'Food' }],
  currentCategory: '1',
};

test('UPDATE_PRODUCTS', () => {
  let newState = reducer(initialState, { // here the state is the initialState variable
    //This is the type of action we're performing, and should be one of the predefined actions we created earlier.
    // the action is always broken to 2 parts: the type and the value, the type of the actio and the value of what changed. representative
    // of the new data we want to use with the action. (here is products)
    type: UPDATE_PRODUCTS,
    products: [{}, {}]
  });

  expect(newState.products.length).toBe(2);
  expect(initialState.products.length).toBe(0);
});


test('UPDATE_CATEGORIES', () => {
  let newState = reducer(initialState, { 
    type: UPDATE_CATEGORIES,
    categories: [{}, {}]
  });

  expect(newState.categories.length).toBe(2);
  expect(initialState.categories.length).toBe(1);
});


test('UPDATE_CURRENT_CATEGORY', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CURRENT_CATEGORY,
    currentCategory: '2'
  });

  expect(newState.currentCategory).toBe('2');
  expect(initialState.currentCategory).toBe('1');
});