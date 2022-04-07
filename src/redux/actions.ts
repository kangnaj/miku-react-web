import { createAction } from 'typesafe-actions';
import {  SET_HEAD_TITLE, ADD_TAG, DEL_TAG } from './actionTypes';
import { tag } from './tagType'
export const setHeadTitle = createAction(SET_HEAD_TITLE)<string>();
export const addTag = createAction(ADD_TAG)<tag>();
export const delTag = createAction(DEL_TAG)<string>();
