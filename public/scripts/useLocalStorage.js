function useLocalStorage(flashcard = null, clearDataBeforeUpdate = false) {
	let flashcards = new Array()
	const databaseKey = 'flashcards'

	if(clearDataBeforeUpdate) localStorage.removeItem(databaseKey)

	if(flashcard) {
		const foundFlashcards = JSON.parse(localStorage.getItem(databaseKey))

		if(foundFlashcards) flashcards = foundFlashcards

		flashcards.push(flashcard)

		localStorage.setItem(databaseKey, JSON.stringify(flashcards))

	}

	flashcards = JSON.parse(localStorage.getItem(databaseKey))

	return flashcards
}

function clear() {
	localStorage.clear()
}

export default useLocalStorage
export { clear }