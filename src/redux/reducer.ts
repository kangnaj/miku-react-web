
import { combineReducers } from 'redux';
import { tag } from './tagType'
//管理头部标题
const initHeadTitle = '首页';
import {  SET_HEAD_TITLE, ADD_TAG, DEL_TAG } from './actionTypes';
function headTitle(state: string = initHeadTitle, action: { type: string; payload: string }) {
	switch (action.type) {
		case SET_HEAD_TITLE:
			return action.payload;
		default:
			return state;
	}
}
const initTagList: Array<tag> = []
function tagList(state: Array<tag> = initTagList, action: { type: string; payload: tag }) {
  switch(action.type) {
    case ADD_TAG:
      state.push(action.payload)
      break
    case DEL_TAG:
      state.pop()
      break
    default:
      break
  }
  return state
}

const rootReducer = combineReducers({
	headTitle,
  tagList
});

export default rootReducer;
