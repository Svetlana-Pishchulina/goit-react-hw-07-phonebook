// export const getContactsReducer = (state) => state.contacts.;

export const getFilterReducer = (state) => state.contacts.filterReducer;

export const getItems = (state) => state.contacts.itemsReduser;

export const getVisibleContacts = (state) =>
  getItems(state).filter((contact) =>
    contact.name.toLowerCase().includes(getFilterReducer(state).toLowerCase())
  );
