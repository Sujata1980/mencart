import React,{ useState } from 'react'
import Modal from 'react-modal'
import './DeletePopup.css'

function DeletePopup({cartAllProducts,setCartAllProducts,handleDelete}) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

   handleDelete = (index) => {
    const filteredProducts = cartAllProducts.filter(
         (mensDreeses) => mensDreeses.id !== index
       );
       setCartAllProducts(filteredProducts);
    alert('Item deleted'); // your delete logic here
    closePopup();
  };

  return (
    <div>
      <button onClick={openPopup}>Delete Item</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={closePopup}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="modal-body">
          <p>Are you sure you want to delete this item?</p>
          <div className="modal-buttons">
            <button onClick={handleDelete}>OK</button>
            <button onClick={closePopup}>Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DeletePopup;


