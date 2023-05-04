import React, { useState } from "react";
import styles from "./Post.module.css";
import Comment from "../../components/Comment/Comment";
import { v4 as uuidv4 } from 'uuid';

import axios from 'axios'

const Post = () => {
  const [comments, setComments] = useState("");
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);

  const handleInputTitle = (event) => {
    setTitle(event.target.value);
  }

  const handleInputComment = (event) => {
    setComments(event.target.value);
  }

  const dataPostServer = {
    "username": localStorage.getItem("name"),
    "created_datetime": localStorage.getItem("created_datetime"),
    "title": title,
    "content": comments,
    "post_id": uuidv4()
  }
  
  const handleSubmit = (event) => {
    event.preventDefault(); 

    const commentContent = comments;
    setComments("");
    const comment = { title, content: commentContent };

    setPosts([...posts, comment]);

    let atualPosts = JSON.parse(localStorage.getItem("user_posts"));
    atualPosts.push(dataPostServer);

    localStorage.setItem("user_posts", JSON.stringify(atualPosts));


    axios.post("https://codeleapback.herokuapp.com/api/v1/post", dataPostServer, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    }, {
      "withCredentials": true
    }).then((response) => {

      console.log(response)
    }).catch((err) => {

      console.log(err)
    });
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <div className={styles.postHeader}>CodeLeap Network</div>
      <form onSubmit={handleSubmit} className={styles.postForm}>
        <h1 className={styles.formTitle}>What’s on your mind?</h1>
        <div className={styles.postTitle}>
          <label htmlFor="title" id={styles.postTitle}>
            Title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Hello world"
            value={title}
            onChange={handleInputTitle}
            required
          />
        </div>
        <div className={styles.postContent}>
          <label htmlFor="content" id={styles.postContent}>
            Content
          </label>
          <textarea 
           value={comments} 
           onChange={handleInputComment} 
           name="content" 
           placeholder="Content here" 
           required
           />
        </div>
        <button  disabled={title.length === 0 || !comments} type="submit" className={styles.postButton}>Create</button>
      </form>
      <div>
        {posts.map((post, index) => {
          return <Comment key={index} title={post.title} content={post.content} />;
        })}
      </div>
      </div>
    </div>
  );
};

export default Post;