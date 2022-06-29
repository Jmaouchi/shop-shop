import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
// get the global store 
import { useStoreContext } from '../../utils/GlobalState';
// get the actions to update our state
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
// get the query data
import { QUERY_CATEGORIES } from '../../utils/queries';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext(); // the useStoreContext will be holding the data that is in the object store

  // this will be an empty object at first
  const { categories } = state;

  const { data: categoryData } = useQuery(QUERY_CATEGORIES);

  // this will fire of and change the object store, and exactly the UPDATE_CATEGORIES action, it will change the value of the action which is 
  //categories that use to be an empty array
  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories, // here we updating the categories, using the UPDATE_CATEGORY action 
      });
    }
  }, [categoryData, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
