import React from "react";

import styles from "./EditModal.module.css";

const EditModal = ({ isOpen, setOpenEditModal }) => {
  if (isOpen) {
    const handleSubmit = (event) => {
      event.preventDefault();
    };

    return (
      <div className={styles.modalBackground}>
        <div className={styles.modalBox}>
          <form onSubmit={handleSubmit} className={styles.postForm}>
            <h1 className={styles.formTitle}>Edit</h1>
            <div className={styles.editTitle}>
              <label htmlFor="title" id={styles.editTitle}>
                Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Hello world"
              />
            </div>
            <div className={styles.editContent}>
              <label htmlFor="content" id={styles.editContent}>
                Content
              </label>
              <textarea name="content" placeholder="Content here"  />
            </div>
            <div className={styles.modalButtons}>
             <button className={styles.cancelButton} onClick={setOpenEditModal}>Cancel</button>
             <button className={styles.saveButton}>Save</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  return null;
};

export default EditModal;
