# Tutorial Redux

## Instalação

Instala 2 pacotes: redux e react-redux

`yarn add redux react-redux`

## Diretórios e arquivos para criar

### src/store/index.js

Eu posso ter 1 reducer, e neste index estaria o próprio reducer, mas dependendo da aplicação, podemos querer mais reducers, então aqui eu crio um reducer global (rootReducer), e na pasta reducers eu distrincho cada reducer. Logo, o código deste index aqui passa a nem precisar de edição.

`import { createStore } from 'redux';  
import rootReducer from "./reducers";  
const store = createStore(rootReducer);  
export default store;`

#### src/store/reducers

Nesta pasta crio meus reducers. Veja o exemplo do reducer src/store/reducers/course.js

#### src/store/reducers/index.js

Neste arquivo eu combino os reducers.

`import { combineReducers } from 'redux';  
import course from './course';  
import user from './user';  
export default combineReducers({  
	course,  
	user,  
});`

#### src/store/actions

Coloque todas as suas actions juntas para organizar! Pense numa action como um trigger. 

Para interagir as actions com o redux, vc precisa colocar como primeiro parâmetro do return um type com uma constante da action (veja src/store/actions/course.js).

## src/App.js

Importe o Provider da lib e o store que vc criou

`import { Provider } from "react-redux"; `
`import store from './store';`

### Provider

É com o Provider q consigo passar as propriedades do state pros componentes. Então o Provider precisa vir hierarquicamente acima dos componentes.

`
<div className="App">  
	<Provider store={store}>  
		<Video />  
		<Sidebar />  
	</Provider>  
</div>  
`
