import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const saveContactAction = createAction("saveConntact", (name, number) => ({
  payload: { id: shortid.generate(), name, number },
}));
const deleteContactAction = createAction("deleteConntact");
const updateFilterAction = createAction("updateFilter");

const fetchContactsRequest = createAction("contacts/fetchContactsRequest");

const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");

const fetchContactsError = createAction("contacts/fetchContactsError");

export default {
  saveContactAction,
  deleteContactAction,
  updateFilterAction,
  fetchContactsRequest,
  fetchContactsError,
  fetchContactsSuccess,
};
