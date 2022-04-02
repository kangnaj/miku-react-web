import { createAction } from 'typesafe-actions';
import {  SET_HEAD_TITLE } from './actionTypes';
export const setHeadTitle = createAction(SET_HEAD_TITLE)<string>();
