function useLocalStorage(newFlashcard = undefined) {
	let flashcards = new Array()
	const databaseKey = 'flashcards'

	if(newFlashcard) {
		if(localStorage.hasOwnProperty(databaseKey)) {
			flashcards = JSON.parse(localStorage.getItem(databaseKey))
		}

		flashcards.push(newFlashcard)

		localStorage.setItem(databaseKey, JSON.stringify(flashcards))
	}

	flashcards = JSON.parse(localStorage.getItem(databaseKey))

	return flashcards
}

export default useLocalStorage