import useLocalStorage from './useLocalStorage.js'
import View from './View.js'

function loadFlashcards() {
	const flashcards = useLocalStorage()

	if(!flashcards) return

	flashcards.forEach( flashcard => {
		const view = new View()

		view.createFlashcard(flashcard)
	})
}

export default loadFlashcards