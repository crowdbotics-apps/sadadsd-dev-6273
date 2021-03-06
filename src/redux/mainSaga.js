import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth6175Saga from '../features/EmailAuth6175/redux/sagas';
import EmailAuth6172Saga from '../features/EmailAuth6172/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth6175Saga,
EmailAuth6172Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}