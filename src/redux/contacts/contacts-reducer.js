import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import actions from "./contacts-actions";

const itemsReduser = createReducer([], {
  [actions.fetchContactsSuccess]: (state, action) => {
    return action.payload;
  },
});

const isLoadingReduser = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
});

const errorReduser = createReducer(null, {
  [actions.fetchContactsError]: (_, action) => action.payload,
  [actions.fetchContactsRequest]: () => null,
});
//   (
//     {
//     contacts:[],
//   isLoading:true,
//   error:null
// }))

const contactsReduser = createReducer([], {
  [actions.saveContactAction]: (state, action) => {
    return [...state, action.payload];
  },
  [actions.deleteContactAction]: (state, action) => {
    return state.filter((contact) => contact.id !== action.payload);
  },
});

const filterReducer = createReducer("", {
  [actions.updateFilterAction]: (_, action) => {
    return action.payload;
  },
});

export default combineReducers({
  itemsReduser,
  isLoadingReduser,
  errorReduser,
  contactsReduser,
  filterReducer,
});
