import { createSlice } from "@reduxjs/toolkit";

export interface FlashCards {
  groupName: string;
  description: string;
  cards: Array<{
    term: string;
    defination: string;
    image?: string;
  }>;
}

export const crateFlashcardSlice = createSlice({
  name: "createflashcard",
  initialState: {
    groupName: "",
    description: "",
    cards: [
      {
        term: "",
        defination: "",
      },
    ],
  },
  reducers: {
    ChangeGroupName: (state, action) => {
      state.groupName = action.payload;
    },
    ChangeDescription: (state, action) => {
      state.description = action.payload;
    },
    addCard: (state) => {
      state.cards = [
        ...state.cards,
        {
          term: "",
          defination: "",
        },
      ];
    },
    deleteCard: (state, action) => {
      const cards = [...state.cards];
      cards.splice(action.payload, 1);
      state.cards = cards;
    },
    editCard: (
      state,
      action: {
        payload: {
          index: number;
          field: "term" | "defination" | "image";
          value: string;
        };
      }
    ) => {
      const cards: FlashCards["cards"] = [...state.cards];
      cards[action.payload.index][action.payload.field] = action.payload.value;
      state.cards = cards;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  ChangeGroupName,
  ChangeDescription,
  addCard,
  deleteCard,
  editCard,
} = crateFlashcardSlice.actions;

export default crateFlashcardSlice.reducer;
