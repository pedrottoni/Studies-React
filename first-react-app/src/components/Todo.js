import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div className="card">
      <h2 data-text={props.text}>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={openModal}>
          Delete
        </button>
      </div>
      {modalOpen ? <Modal no={closeModal} yes={closeModal} /> : null}
      {modalOpen && <Backdrop close={closeModal}/>}
    </div>
  );
}

export default Todo;
