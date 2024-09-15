import { createStore, applyMiddleware } from 'redux';
import { thunk, ThunkDispatch } from 'redux-thunk';
import taskReducer from './reducers';
import { Task } from './types';

export type BaseState = Task[];

export type ThunkDispatchType = ThunkDispatch<BaseState, void, any>;

const store = createStore(taskReducer, applyMiddleware(thunk));

export default store;