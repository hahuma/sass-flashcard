import Flashcard from './Flashcard.js'
import View from './View.js'


const createFlashcardButton = document.getElementById('save_flashcard')



const handleSubmitEvent = () => {
	const question = document.getElementById('flashcard_question').value
	const answer = document.getElementById('flashcard_answer').value
	const color = document.getElementById('flashcard_color').value
	const flashcard = new Flashcard(question, answer, color)
	const view = new View()
	view.createFlashcard(flashcard)
	console.log(flashcard)
}

Flashcard.submitFlashcardEvent(createFlashcardButton, handleSubmitEvent)
