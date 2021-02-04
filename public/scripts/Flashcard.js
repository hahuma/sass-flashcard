class Flashcard {
	constructor(question, answer, color) {
		this.question = question
		this.answer = answer
		this.color = color
		this.id = question.replace(/\d| |\W/g, '')
	}

	static submitFlashcardEvent(buttonElement, callbackFunction) {
		const eventType = 'click'
		return buttonElement.addEventListener(eventType, callbackFunction)
	}

}

export default Flashcard