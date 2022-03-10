import { combineReducers } from 'redux';

import EntitiesReducer from '../entities/redux/reducer';

/* ============================================================================
  Combine ALl Reducers
============================================================================= */
const rootReducer = combineReducers({
  Entities: EntitiesReducer,
});

export default rootReducer;
