import { createStore } from "redux";
import rootReducer from "./root.reducer";

const redux = createStore(rootReducer);

export default redux;
