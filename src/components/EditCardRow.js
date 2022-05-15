import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <div className="edit">
      <div className="formEdit">
      <div>
        <input
          type="text"
          required="required"
          placeholder="image..."
          name="image"
          value={editFormData.image}
          onChange={handleEditFormChange}
        ></input>
      </div>
      <div>
        <input
          type="text"
          required="required"
          placeholder="product..."
          name="product"
          value={editFormData.product}
          onChange={handleEditFormChange}
        ></input>
      </div>
      <div>
        <input
          type="text"
          required="required"
          placeholder="bahan..."
          name="bahan"
          value={editFormData.bahan}
          onChange={handleEditFormChange}
        ></input>
      </div>
      <div>
        <input
          type="teks"
          required="required"
          placeholder="warna..."
          name="warna"
          value={editFormData.warna}
          onChange={handleEditFormChange}
        ></input>
      </div>
      <div>
        <input
          type="integer"
          required="required"
          placeholder="harga..."
          name="harga"
          value={editFormData.harga}
          onChange={handleEditFormChange}
        ></input>
      </div>
      </div>
      <div className="saveBtn">
        <button className="save" type="submit">Save</button>
        <button className="cancel" type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </div>
    </div >
  );
};

export default EditableRow;
