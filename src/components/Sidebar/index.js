import React from 'react';

import { connect } from 'react-redux'; // O connect serve para conectar o state do redux a este componente
import { bindActionCreators } from 'redux' // É um helper do redux. Se o nome q eu dou a minha action aqui for igual a action da função e tiver os mesmos parâmetros, eu economizo uns códigos usando esse carinha. Lá embaixo eu comentei o código otimizado

import * as CourseActions from '../../store/actions/course'; // Pegando todas as actions do arquivo criado de actions

const Sidebar = ({ modules, toggleLesson }) => { // o dispatch serve pra disparar as ações pro redux (antes estava no lugar de toggleLesson. Depois de criado o mapDispatchToProps, aí pude trocar de dispatch pra toggleLesson)
	return (
		<div>
			<aside>
				{ modules.map(module => (
					<div key={module.id}> {/*Usa key pq está dentro do map*/}
						<strong>{module.title}</strong>
						<ul>
							{ module.lessons.map(lesson => (
								<li key={lesson.id}>
									{lesson.title}
									<button onClick={() => toggleLesson(module, lesson)}>Selecionar</button>
								</li>
							))}
						</ul>
					</div>
				))}
			</aside>
		</div>
	);
};

// O connect pode ser tetificado em 2 partes:
//	* mapStateToProps (mapeia os itens do state que eu desejo neste componente)
//	* mapDispatchToProps (posso dar nomes às actions deste componente)
// essas 2 tetificações ajudam a organizar o código

const mapStateToProps = state => ({
	modules: state.course.modules
})

// Sem bindActionCreators:
// const mapDispatchToProps = dispatch => ({
// 	toggleLesson: (module, lesson) => dispatch(CourseActions.toggleLesson(module, lesson))
// })

// Com bindActionCreators:
const mapDispatchToProps = dispatch => bindActionCreators(CourseActions, dispatch)
	
// Por causa do connect do redux, o Sidebar acaba indo para um segundo parâmetro
export default connect(
	mapStateToProps, mapDispatchToProps
)(Sidebar);