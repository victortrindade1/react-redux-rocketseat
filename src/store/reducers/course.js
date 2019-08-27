const INITIAL_STATE = {
	activeLesson: {},
	activeModule: {},
	modules: [
		{
			id: 1,
			title: "Iniciando com React",
			lessons: [
				{ id: 1, title: "Primeira aula"},
				{ id: 2, title: "Segunda aula" }
			]
		},
		{
			id: 2,
			title: "Aprendendo com Redux",
			lessons: [
				{ id: 3, title: "Terceira aula"},
				{ id: 4, title: "Quarta aula" }
			]
		}
	]
}

//O reducer é uma função q retorna meu estado inicial, mas tb pode manipular o estado com actions
export default function course(state = INITIAL_STATE, action) {
	if (action.type === "TOGGLE_LESSON") {
		return {
			...state,
			activeLesson: action.lesson,
			activeModule: action.module
		}
	}

	return state;
}