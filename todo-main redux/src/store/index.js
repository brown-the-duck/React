import { combineReducers } from "redux";
import todos from './todos';
import groups from './groups';

const rootReducer = combineReducers({
    todos,
    groups
});
export default rootReducer;