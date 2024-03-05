import LayoutReducer from "./layouts/reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        Layout: LayoutReducer,
    },
});

export default store;
