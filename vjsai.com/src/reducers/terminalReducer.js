/**
 * Created by vijay on 20/3/17.
 */

import initialState from './initialState';
import objectAssign from 'object-assign';
import * as types from '../constants/actionTypes';
import command_msgs from '../constants/command_msgs';

export default function terminalReducer(initial=initialState,action){
  let newState;
  switch(action.type){
    case types.ADD_HISTORY:
      newState = objectAssign({}, initial);
        newState.history = [...initial.history,action.history];
      return newState;
    case types.SHOW_HELP:
    case types.LIST_FILES:
    case types.SHOW_WELCOME_MESSAGE:
      console.log("reached show help",command_msgs[action.type]);
      newState = objectAssign({}, initial);
      newState.history = [...initial.history,...command_msgs[action.type]];
      return newState;
    case types.CLEAR_INPUT:
	      newState = objectAssign({}, initial);
	      newState.history = [];
        return newState;
    default:
      return initial;
  }
}
