import React, { useState, Fragment, } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditCardRow";



const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    image: "",
    product: "",
    bahan: "",
    warna: "",
    harga: "",
  });

  const [editFormData, setEditFormData] = useState({
    image: "",
    product: "",
    bahan: "",
    warna: "",
    harga: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      image: addFormData.image,
      product: addFormData.product,
      bahan: addFormData.bahan,
      warna: addFormData.warna,
      harga: addFormData.harga,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      image: editFormData.image,
      product: editFormData.product,
      bahan: editFormData.bahan,
      warna: editFormData.warna,
      harga: editFormData.harga,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      image: contact.image,
      product: contact.product,
      bahan: contact.bahan,
      warna: contact.warna,
      harga: contact.harga,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };


  return (
    <div className="app-container">
      <h2 class="tittle">Shopping at Home</h2>
      <div class="listProduct">
      <form onSubmit={handleEditFormSubmit}>
          <tbody className="wrapList">
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                 
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />)
                }
              </Fragment> 
            ))}
          </tbody>
        

      </form>
      </div>
 
      <div class="addForm">         
      <h2>Add a Product</h2>
      <form class="addProduct" onSubmit={handleAddFormSubmit}>
        <div className="input">
        <div>Image  :</div>
        <input
          type="text"
          name="image"
          required="required"
          onChange={handleAddFormChange}
        />
        <div>Product  :</div>
        <input
          type="text"
          name="product"
          required="required"
          onChange={handleAddFormChange}
        /> 
        <div>Fabric :</div>
        <input
          type="text"
          name="bahan"
          required="required"
          onChange={handleAddFormChange}
        />
        <div>Color :</div>
        <input
          type="text"
          name="warna"
          required="required"
          onChange={handleAddFormChange}
        />
        <div>Price :</div>
        <input
          type="number"
          name="harga"
          required="required"
          onChange={handleAddFormChange}
        /></div>
        <button class="addBtn" type="submit">Add</button>
      </form>
    </div>
    </div>  
  );
};

export default App;

