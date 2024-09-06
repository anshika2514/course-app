// redux/reducers/index.js

import { combineReducers } from 'redux';
import courseReducer from './courseReducer';

const rootReducer = combineReducers({
  courses: courseReducer
});

export default rootReducer;