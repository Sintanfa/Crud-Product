import React from "react";
import "./Modal.css";

const Modal = ({ contact, setOpenModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div class="detail1">
        <img class="img1" src={contact.image} alt="" />
        <div class="detailProduct">
        <div className="namaProduct">{contact.product}</div>
        <div>Fabric: {contact.bahan}</div>
        <div>Color: {contact.warna}</div>
        <div>Price: {contact.harga}</div>
        </div>
    </div>
    </div>
      </div>
    
  );
}

export default Modal;
