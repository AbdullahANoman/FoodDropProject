import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/users/userSlice";
import logger from "./middleware/logger";

const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
