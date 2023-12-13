import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import reducer from "../reducers";
import rootreducer from "../sagas";

const configureStore = () => {
  const sagaMiddlware = createSagaMiddleware();
  const middlewares = [sagaMiddlware, loggerMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddlware.run(rootSaga);
  return store;
};

// const wrapper = createStore(configureStore, {
//   debug: process.env.NODE_ENV === "development",
// });

export default configureStore;
