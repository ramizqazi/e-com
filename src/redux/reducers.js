import { combineReducers } from 'redux';

import EntitiesReducer from '../entities/redux/reducer';
import AuthReducer from '../auth/redux/reducer';
import HomeReducer from '../home/redux/reducer';
import WishListReducer from '../wishList/redux/reducer';
import ProductReducer from '../products/redux/reducer';

/* ============================================================================
  Combine ALl Reducers
============================================================================= */
const rootReducer = combineReducers({
  Auth: AuthReducer,
  Home: HomeReducer,
  WishList: WishListReducer,
  Product: ProductReducer,
  Entities: EntitiesReducer,
});

export default rootReducer;
