import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counterSlice.tsx";
import todoReducer from "./feature/todoSlice.tsx";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
  //   devTools:false, //--> disable redux devtools
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
