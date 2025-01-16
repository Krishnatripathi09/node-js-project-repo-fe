import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connectionsSlice";
import requestReducer from "./requestSlice";

const appstore = configureStore({
  reducer: {
    user: useReducer,
    feed: feedReducer,
    connections: connectionReducer,
    requests: requestReducer,
  },
});

export default appstore;
