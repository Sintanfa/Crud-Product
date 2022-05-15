import React, { useState } from "react";
import Modal from "./Modal"

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick   }) => {
const [modalOpen, setModalOpen] = useState(false);

  
  return (
    <div className="card" >
      <img class="img" src={contact.image} alt="" />
      <div class="detail">
      <div className="TittleCard">{contact.product}</div>
      <div>{contact.harga}</div>
      </div>
      <div className="editBtn" >
     
      <i class='bx bxs-pencil' onClick={(event) => handleEditClick(event, contact)} ></i>
      <i class='bx bx-detail' onClick={() => setModalOpen(true) }></i>
        {modalOpen && <Modal contact={contact} setOpenModal={setModalOpen} />}
        <i class='bx bxs-trash'onClick={() => handleDeleteClick(contact.id)}></i>
         </div>
      </div>
     
    
  );
};

export default ReadOnlyRow;
