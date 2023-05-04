import React from 'react'

import styles from './DeleteModal.module.css'

const DeleteModal = ({isOpen, setModalOpen}) => {

 if(isOpen) {  
   return ( 
    <div className={styles.modalBackground}>
        <div className={styles.modalBox}>
            <p className={styles.confirmText}>Are you sure you want to delete this item?</p>
            <div className={styles.modalButtons}>
                <button className={styles.cancelButton}  onClick={setModalOpen}>Cancel</button>
                <button className={styles.deleteButton}>Delete</button>
            </div>
        </div>
    </div>
    )
 }   
    return null
  
}

export default DeleteModal