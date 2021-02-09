import Flashcard from './Flashcard.js'
import View from './View.js'
import useLocalStorage from './useLocalStorage.js'	


const createFlashcardButton = document.getElementById('save_flashcard')



const handleSubmitEvent = () => {
	const question = document.getElementById('flashcard_question').value
	const answer = document.getElementById('flashcard_answer').value
	const color = document.getElementById('flashcard_color').value

	try {
		const flashcard = new Flashcard(question, answer, color)
		const view = new View()
		view.createFlashcard(flashcard)
		useLocalStorage(flashcard)
	} catch(e) {
		alert(e.message)
	}
	
}

Flashcard.submitFlashcardEvent(createFlashcardButton, handleSubmitEvent)
