export function toggleLesson(module, lesson) {
	return {
		type: 'TOGGLE_LESSON', // Sempre que eu quiser disparar uma action para o redux, eu tenho que obedecer este padrão colocando como primeiro elemento do objeto a palavra type com uma constante criada por mim
		module,
		lesson,
	}
}