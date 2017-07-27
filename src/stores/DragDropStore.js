// @flow

import { DragDropReducer } from "../reducers";
import { Model } from "../types";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const init = new Model();

function composeWithApplyMiddlewares() {
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    return compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }
  return compose(applyMiddleware(thunk));
}

const createDragDropStore = (model: Model = init) => {
  return createStore(DragDropReducer, model, composeWithApplyMiddlewares());
};

const DragDropStore = createDragDropStore(init);

export default DragDropStore;

export { DragDropStore };
