import { createStore } from 'redux'; //Esta é a função q cria o store

import rootReducer from "./reducers";

const store = createStore(rootReducer);

export default store;