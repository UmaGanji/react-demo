import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
    name: 'questions',
    initialState: [{
        "id": 9,
        "questionTitle": "test question9",
        "questionDescription": "test",
        "answers": [],
        "votes": 0,
        "views": 2
      }],
    reducers: {
        addQuestion: (state, action) => {
            console.log('action..', action)
        }
    }
});

export const {addQuestion} = questionSlice.actions;
export default questionSlice.reducer;