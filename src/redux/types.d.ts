import { StateType } from 'typesafe-actions';
import store from './store'

declare module 'typesafe-actions' {
  export type Store = StateType<typeof import('./store').default>

  export type RootState = StateType<typeof import('./reducer').default>;

  export type RootAction = ActionType<typeof import('./actions').default>
}
export type RootState = ReturnType<typeof store.getState>
