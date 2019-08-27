# Tutorial Redux

## Instalação

Instala 2 pacotes: redux e react-redux

`yarn add redux react-redux`

## Diretórios e arquivos para criar

### src/store/index.js

Eu posso ter 1 reducer, e neste index estaria o próprio reducer, mas dependendo da aplicação, podemos querer mais reducers, então aqui eu crio um reducer global (rootReducer), e na pasta reducers eu distrincho cada reducer. Logo, o código deste index aqui passa a nem precisar de edição.

`import { createStore } from 'redux'; //Esta é a função q cria o store
import rootReducer from "./reducers";

const store = createStore(rootReducer);

export default store;`

#### src/store/reducers/index.js

Neste arquivo eu combino os reducers.

`import { combineReducers } from 'redux';

import course from './course'; //reducer 1
import user from './user'; //reducer 2

export default combineReducers({
	course,
	user,
});`