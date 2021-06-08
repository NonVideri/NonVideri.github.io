import { createStore } from "redux";
import reducer from "./reducer";
import { contacts } from "./static-data";

const store = createStore(reducer, {contacts});

export default store;