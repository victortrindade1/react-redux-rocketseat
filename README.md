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

`<div className="App">` <br/>
`   <Provider store={store}>` <br/>
`      <Video />` <br/>
`      <Sidebar />` <br/> 
`   </Provider>` <br/>
`</div>`

## Redux nos componentes

### connect

O connect é o responsável por conectar o componente ao store. 
No "export default MyComponent", vc coloca "export default connect()(MyComponent)".

`import { connect } from 'react-redux';`

`export default connect(state => ({
	param1: state.reducer1.param1,
	param2: state.reducer1.param2
	...
}))(MyComponent);`

O connect possui dois helpers para organizar seu código:
* mapStateToProps
* mapDispatchToProps

`export default connect(
	mapStateToProps, mapDispatchToProps
)(MyComponent);`

#### mapStateToProps

Mapeia os itens do state que eu desejo neste componente. Se torna argumento do connect.

`const mapStateToProps = state => ({
	param1: state.reducer1.param1
})`

`export default connect(mapStateToProps)(MyComponent);`

#### mapDispatchToProps

Posso dar nomes às actions do componente. Em vez de eu escrever um dispatch dentro do return, eu separo as actions para organizar.

É auxiliado por um helper do Redux chamado bindActionCreators, que torna mais legível o código.

Sem bindActionCreators:
`const mapDispatchToProps = dispatch => ({
	toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson))
})`

Com bindActionCreators:
`import { bindActionCreators } from 'redux'`

`const mapDispatchToProps = dispatch => bindActionCreators(CourseActions, dispatch)`

O mapDispatchToProps é passado no connect:

`export default connect(
	mapStateToProps, mapDispatchToProps
)(MyComponent);`

# Redux com Hooks

É um jeito ainda mais otimizado, menos verboso. Não tem mais o mapStateToProps nem o mapDispatchToProps. Não cheguei a abordar aqui. O código mais otimizado vc encontra aqui:

https://github.com/diego3g/react-hooks-redux-example