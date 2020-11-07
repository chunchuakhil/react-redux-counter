import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Counter from "./Counter";
import countReducer from "./redux/stateReducer-stateChanger";

const store = createStore(countReducer);
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
