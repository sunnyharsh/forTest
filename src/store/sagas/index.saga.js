import { takeLatest, all } from "redux-saga/effects";
import { EMPLOYEE_DATA, INSERT_DATA, DELETE_DATA } from "../action.types";

import { onEmpData } from "./employeeeData.saga";
import { onInsertData } from "./insertEmp.saga";
import { onDeleteData} from "./delete.saga"

function* sagas() {
    yield all([takeLatest(EMPLOYEE_DATA, onEmpData)]);
    yield all([takeLatest(INSERT_DATA, onInsertData)]);
    yield all([takeLatest(DELETE_DATA, onDeleteData)]);
    
}

export default sagas;