class Flashcard {
	constructor(question, answer, color) {
		if(!question || !answer || !color){
			throw new Error('Please fill up the inputs')
		}
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