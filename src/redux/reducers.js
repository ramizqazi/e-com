import { combineReducers } from 'redux';

import EntitiesReducer from '../entities/redux/reducer';
import AuthReducer from '../auth/redux/reducer';

/* ============================================================================
  Combine ALl Reducers
============================================================================= */
const rootReducer = combineReducers({
  Auth: AuthReducer,
  Entities: EntitiesReducer,
});

export default rootReducer;
