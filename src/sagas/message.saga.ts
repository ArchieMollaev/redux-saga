import { debounce, put } from "redux-saga/effects";
import { updateMessageAction, createMessageAction } from "../actions";

function* updateMessage(action: any) {
  const text = `${action.payload} - my new message`;
  yield put(updateMessageAction(text));
}

export default function* messageSaga() {
  yield debounce(1000, createMessageAction.type, updateMessage);
}
