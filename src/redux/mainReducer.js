import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth6175Reducer from '../features/EmailAuth6175/redux/reducers';
import EmailAuth6172Reducer from '../features/EmailAuth6172/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth6175: EmailAuth6175Reducer,
EmailAuth6172: EmailAuth6172Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});