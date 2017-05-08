// Set up your root reducer here...
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import terminalReducer from './terminalReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  term : terminalReducer
});

export default rootReducer;
