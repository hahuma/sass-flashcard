import deleteFlashcard from './deleteFlashcard.js'

class View {

	createFlashcard({ question, color, answer, id }) {
		const createdFlashcardsContainer = document.querySelector('.created_flashcards')
		const flashcardDiv = document.createElement('div')
		const flashcardQuestionH3 = document.createElement('h3')
		const flashcardAnswerH3 = document.createElement('h3')
		const trashBinButton = document.createElement('button')

		flashcardQuestionH3.innerText = question
		flashcardAnswerH3.innerText = answer
		trashBinButton.innerText = 'delete'

		flashcardQuestionH3.classList.add('question')
		flashcardAnswerH3.classList.add('answer')
		trashBinButton.classList.add('delete_flashcard')

		flashcardQuestionH3.id = `${id}question`
		flashcardAnswerH3.id = `${id}answer`
		flashcardDiv.id = `${id}container`

		trashBinButton.onclick = () => deleteFlashcard(id)

		flashcardDiv.append(flashcardQuestionH3)
		flashcardDiv.append(flashcardAnswerH3)
		flashcardDiv.append(trashBinButton)

		this._addFlashcardColor(flashcardDiv, color)
		this._addFlipFlashcardEvent(flashcardQuestionH3, id)
		this._addFlipFlashcardEvent(flashcardAnswerH3, id)


		createdFlashcardsContainer.append(flashcardDiv)
	}

	_addFlashcardColor(flashcardDiv, color) {
		flashcardDiv.style.backgroundColor = color
	}

	_flipFlashcardCallback = (id) => () => {
		const questionH3 = document.querySelector(`#${id}question`)
		const answerH3 = document.querySelector(`#${id}answer`)

		if(questionH3.style.display === 'block' || questionH3.style.display === '') {
			questionH3.style.display = 'none'
			answerH3.style.display = 'block'

			return
		}

		if(questionH3.style.display === 'none') {
			questionH3.style.display = 'block'
			answerH3.style.display = 'none'

			return
		}
		


	}

	static removeFlashcard(id) {
		const choosenFlashcard = document.getElementById(`${id}container`)
		choosenFlashcard.remove()
	}

	_addFlipFlashcardEvent(flashcardH3, id) {
		flashcardH3.addEventListener('click', this._flipFlashcardCallback(id))
	}

}

export default View