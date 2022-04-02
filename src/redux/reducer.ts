
import { combineReducers } from 'redux';
//管理头部标题
const initHeadTitle = '首页';
import {  SET_HEAD_TITLE } from './actionTypes';
function headTitle(state: string = initHeadTitle, action: { type: any; payload: string }) {
  console.log(action, 'action7897987')
	switch (action.type) {
		case SET_HEAD_TITLE:
			return action.payload;
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	headTitle
});

export default rootReducer;
