import { CHANGE_PAGE, START_GAME, GET_CARS_SUCCESS, GET_CARS_FAILED } from './constants';

export interface StateData {
  viewPage: 'garage' | 'winners';
  cars: Car[];
  carsFailed: boolean;
}

export interface StartGameActionType {
  readonly type: typeof START_GAME;
}

export interface ChangePageActionType {
  readonly type: typeof CHANGE_PAGE;
  payload: 'garage' | 'winners';
}

export interface GetCarsFailedActionType {
  readonly type: typeof GET_CARS_FAILED;
}

export interface GetCarsSuccessActionType {
  readonly type: typeof GET_CARS_SUCCESS;
  payload: Car[];
}

export type SubcribersType = () => void;

export interface Car {
  name: string;
  color: string;
  id: number;
}
