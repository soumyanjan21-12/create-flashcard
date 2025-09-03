import { configureStore } from '@reduxjs/toolkit'
import crateFlashcardReducer from '../pages/create-flashcard/create-flashcard-slice'

export default configureStore({
 reducer: {
    crateFlashCards: crateFlashcardReducer,
  },
})

