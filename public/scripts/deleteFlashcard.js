import useLocalStorage, { clear } from './useLocalStorage.js'
import View from './View.js'

function deleteFlashcard(id) {
	const flashcards = useLocalStorage()

	const updatedFlashcards = flashcards.filter(flashcard => flashcard.id !== id)

	if(updatedFlashcards.length === 0) {
		clear()
	} else {
		const clearDataBeforeUpdate = true
		updatedFlashcards.forEach(flashcard => useLocalStorage(flashcard, clearDataBeforeUpdate))	
	}
	
	
	View.removeFlashcard(id)
}

export default deleteFlashcard