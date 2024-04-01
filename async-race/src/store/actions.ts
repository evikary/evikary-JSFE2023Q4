import { CHANGE_PAGE, NEXT_PAGE, PREV_PAGE, START_GAME } from './constants';
import {
  ChangePageActionType,
  CreateCarFailedActionType,
  CreateCarSuccessActionType,
  DeleteCarActionType,
  GetCarsFailedActionType,
  GetCarsSuccessActionType,
  NextPageActionType,
  PrevPageActionType,
  StartGameActionType,
  UpdateCarActionType,
} from './types';

export const startGameAction = (): StartGameActionType => ({ type: START_GAME });

export const changePageAction = (title: 'garage' | 'winners'): ChangePageActionType => ({
  type: CHANGE_PAGE,
  payload: title,
});

export const nextPageAction = (): NextPageActionType => ({ type: NEXT_PAGE });
export const prevPageAction = (): PrevPageActionType => ({ type: PREV_PAGE });

export type AllActions =
  | StartGameActionType
  | ChangePageActionType
  | GetCarsSuccessActionType
  | GetCarsFailedActionType
  | CreateCarSuccessActionType
  | CreateCarFailedActionType
  | DeleteCarActionType
  | UpdateCarActionType
  | NextPageActionType
  | PrevPageActionType;
