import { CHANGE_PAGE, START_GAME } from './constants';
import { ChangePageActionType, GetCarsFailedActionType, GetCarsSuccessActionType, StartGameActionType } from './types';

export const startGameAction = (): StartGameActionType => ({ type: START_GAME });

export const changePageAction = (title: 'garage' | 'winners'): ChangePageActionType => ({
  type: CHANGE_PAGE,
  payload: title,
});

export type AllActions =
  | StartGameActionType
  | ChangePageActionType
  | GetCarsSuccessActionType
  | GetCarsFailedActionType;
