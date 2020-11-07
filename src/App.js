import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import Counter from "./Counter";
import countReducer from "./redux/stateReducer-stateChanger";
import userReducer from "./thunk/reducer-stateChanger";

const rootReducer = combineReducers({
  countReducer,
  userReducer,
});

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk, logger));
//creates store with all reducrs/state changing functions
//most of the business logic is present in the reducer, because reducers can change the state

function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
