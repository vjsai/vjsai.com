/**
 * Created by vijay on 20/3/17.
 */
import * as types from '../constants/actionTypes';

export function addHistory(history) {
   return {type : types.ADD_HISTORY,history};
}

export function commandDispatch(type,arg){
  return {type,arg};
}
