import { CHANGE_PAGE, START_GAME } from './constants';

export interface StateData {
  viewPage: 'garage' | 'winners';
}

export interface StartGameActionType {
  readonly type: typeof START_GAME;
}

export interface ChangePageActionType {
  readonly type: typeof CHANGE_PAGE;
  payload: 'garage' | 'winners';
}

export type SubcribersType = () => void;
