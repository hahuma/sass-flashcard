class View {

	createFlashcard({ question, color, answer, id }) {
		const createdFlashcardsContainer = document.querySelector('.created_flashcards')
		const flashcardDiv = document.createElement('div')
		const flashcardQuestionH3 = document.createElement('h3')
		const flashcardAnswerH3 = document.createElement('h3')

		flashcardQuestionH3.innerText = question
		flashcardAnswerH3.innerText = answer

		flashcardQuestionH3.classList.add('question')
		flashcardAnswerH3.classList.add('answer')

		flashcardQuestionH3.id = `${id}question`
		flashcardAnswerH3.id = `${id}answer`

		flashcardDiv.append(flashcardQuestionH3)
		flashcardDiv.append(flashcardAnswerH3)

		this._addFlashcardColor(flashcardDiv, color)
		this._addFlipFlashcardEvent(flashcardDiv, id)


		createdFlashcardsContainer.append(flashcardDiv)
	}

	_addFlashcardColor(flashcardDiv, color) {
		flashcardDiv.style.backgroundColor = color
	}

	_flipFlashcardCallback = (id) => () => {
		console.log(id)
		const questionH3 = document.querySelector(`#${id}question`)
		const answerH3 = document.querySelector(`#${id}answer`)

		console.log(questionH3.style.display)
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

	_addFlipFlashcardEvent(flashcardDiv, id) {
		flashcardDiv.addEventListener('click', this._flipFlashcardCallback(id))
	}

}

export default View