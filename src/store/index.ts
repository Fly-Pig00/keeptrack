import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "redux";

import { ProjectState } from './projects/projectTypes';
import { initialProjectState } from './projects/projectReducer';
import { projectReducer } from './projects/projectReducer';
import counter from './counter/counterReducer'
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

const reducer = combineReducers({
  projectState: projectReducer,
  counter
});

export default function configureStore(preloadedState: any) {

  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [ReduxThunk, sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  //Thunk is middleware
  //DevTools is an enhancer (actually changes Redux)
  //applyMiddleware wraps middleware and returns an enhancer

  // to use only thunk middleware
  // const enhancer = compose(middlewareEnhancer);

  //to use thunk & devTools
  const enhancer = composeWithDevTools(middlewareEnhancer);

  const store = createStore(reducer, preloadedState, enhancer);

  sagaMiddleware.run(rootSaga);

  return store;
}

export interface AppState {
  projectState: ProjectState;
  counter: Number;
}

export const initialAppState: AppState = {
  projectState: initialProjectState,
  counter: 0
};

export const store = configureStore(initialAppState);