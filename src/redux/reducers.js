import { combineReducers } from 'redux';

import EntitiesReducer from '../entities/redux/reducer';
import AuthReducer from '../auth/redux/reducer';
import ProductReducer from '../products/redux/reducer';

/* ============================================================================
  Combine ALl Reducers
============================================================================= */
const rootReducer = combineReducers({
  Auth: AuthReducer,
  Product: ProductReducer,
  Entities: EntitiesReducer,
});

export default rootReducer;
