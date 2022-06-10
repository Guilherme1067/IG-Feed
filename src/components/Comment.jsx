import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export const Comment = ({ content, onDeleteComment }) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeComment = () => {
    setLikeCount((count) => count + 1);
  };
  const handleDeleteComment = () => {
    onDeleteComment(content);
  };
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/guilherme1067.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Reis</strong>
              <time title="11 de maio as 09:39" dateTime="2022-06-08 09:39:00 ">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
