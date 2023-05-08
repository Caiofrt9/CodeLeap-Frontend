import React, { useState } from "react";

import styles from "./Comment.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal"

const Comment = ({key, title, content, post, deleteComment,id}) => {

  const [openModal, setOpenModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)

  const postData = post;

  
  const handleDelete = () => {
    deleteComment(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.commentHeader}>
        <p>{title}</p>
        <div className={styles.commentIcons}>
          <button className={styles.commentIcon} onClick={ () => setOpenModal(true)}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          <button className={styles.commentIcon}>
          <FontAwesomeIcon icon={faPenToSquare} onClick={() => setOpenEditModal(true)}/>
          </button>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.contentDescription}>
          <p>@{localStorage.getItem("name")}</p>
          <p>25 minutes ago</p>
        </div>
        <div className={styles.content}>
          <p>{content}</p>
        </div>
      </div>
      <DeleteModal post={postData} key={key} isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} handleDelete={handleDelete}/>
      <EditModal isOpen={openEditModal} setOpenEditModal={() => setOpenEditModal(!setOpenEditModal)}/>
</div>
  );
};

export default Comment;
