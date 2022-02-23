import { createStore } from "redux";
import rootreducer from "./reduce/index";
const store = createStore(rootreducer);
export default store;